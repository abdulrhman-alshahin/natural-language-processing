import {
  hamzas,
  patterns,
  patternsStrings,
  stopWords,
  vowels,
} from '../constants/constants';
import { Cleaner } from './cleaner';

export class Rooter {
  private cleaner: Cleaner = new Cleaner('');
  constructor() {}

  root(token: string) {
    token = token.trim();
    token = token.replace(vowels, '');
    if (stopWords.includes(token) || token.length < 3) {
      return [[token], token];
    }
    token = this.preNormalize(token);
    this.cleaner = new Cleaner(token);
    for (let i = 4; i > 1; i--) token = this.cleaner.remove(i, 'prefix', true);
    let { matches, patterns } = this.getMatches(token, 'suffix');

    matches = matches.concat(this.getMatches(token, 'prefix').matches);
    matches = matches.map((m) => this.postNormalize(m));

    matches = matches.reduce((res: string[], current) => {
      !res.includes(current) && res.push(current);
      return res;
    }, []);
    return [matches, patterns];
  }

  private getMatches(
    token: string,
    removeFirst = 'suffix',
    inRecursion = false
  ) {
    let originalToken = token;
    let len = token.length;
    let matches: string[] = [];
    let retPatterns: string[] = [];
    while (len > 3) {
      const { matches: _matches, patterns: _patterns } =
        this.getMatchesForPatterns(token, patterns[len], len);
      matches = matches.concat(_matches);
      retPatterns = retPatterns.concat(_patterns);
      token = this.cleaner.remove(1, 'suffix', false);

      if (token.length == len) {
        break;
      }
      len -= 1;
    }

    if (matches.length == 0 && !inRecursion) {
      const { matches: _matches, patterns: _patterns } =
        this.getMatchesForPatterns(token, patterns[3], 3);
      matches = matches.concat(_matches);
      retPatterns = retPatterns.concat(_patterns);
    }

    let finalMatches: string[] = [];
    let finalPatterns: string[] = [];
    matches.forEach((match, idx) => {
      if (match.length > 3 && match !== originalToken) {
        const { matches: _matches, patterns: _patterns } = this.getMatches(
          match,
          removeFirst,
          true
        );
        finalMatches = finalMatches.concat(_matches);
        finalPatterns = finalPatterns.concat(_patterns);
      } else {
        finalMatches.push(match);
        finalPatterns.push(retPatterns[idx]);
      }
    });

    return { matches: finalMatches, patterns: finalPatterns };
  }

  private getMatchesForPatterns(
    token: string,
    patterns: RegExp[],
    len: number
  ) {
    const matches = [];
    const patternsMatched = [];
    let i = 0;
    for (let pat of patterns || []) {
      let match;

      if ((match = pat.exec(token))) {
        matches.push(match.slice(1).join(''));
        patternsMatched.push(patternsStrings[len][i]);
      }
      i++;
    }
    return { matches, patterns: patternsMatched };
  }

  private preNormalize(token: string) {
    token = token.replace(hamzas, 'ا');
    token = token.replace(/ى/, 'ي');
    token = token.replace(/ة$/, 'ه');
    return token;
  }
  private postNormalize(token: string) {
    if (token.length == 3) {
      const c1 = token[0].replace(/[ي]/, 'ا');
      const c2 = token[1].replace(/[او]/, 'ي');
      const c3 = token[2].replace(/[اوه]/, 'ي');
      token = c1 + c2 + c3;
    }
    if (token.length == 2) {
      token = token + 'ي';
    }
    return token;
  }
}
