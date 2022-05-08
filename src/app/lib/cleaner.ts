import { prefixes, suffixes } from '../constants/constants';

export class Cleaner {
  private curToken: string;
  private prefix: string = '';
  private suffix: string = '';
  constructor(private token: string) {
    this.curToken = token;
  }
  remove(count: number, priority = 'suffix', bothSides = false) {
    if (!this.canRemove(count)) {
      return this.curToken;
    }

    const order =
      priority == 'suffix' ? ['Suffix', 'Prefix'] : ['Prefix', 'Suffix'];
    let affix: null | string = null;
    order.forEach((affixType) => {
      if (!affix || bothSides) {
        if (affixType === 'Prefix') {
          affix = this.getPrefix(count);
          this.removePrefix(affix);
        } else {
          affix = this.getSuffix(count);
          this.removeSuffix(affix);
        }
      }
    });

    return this.curToken;
  }

  private canRemove(length: number) {
    return this.curToken.length - length >= 3;
  }

  private removeSuffix(suffix: string) {
    if (this.curToken.endsWith(suffix)) {
      this.curToken = this.curToken.substring(
        0,
        this.curToken.length - suffix.length
      );
      this.suffix = suffix + this.suffix;
    }
  }
  private removePrefix(prefix: string) {
    if (this.curToken.startsWith(prefix)) {
      this.curToken = this.curToken.substr(prefix.length);
      this.prefix = this.prefix + prefix;
    }
  }
  private getPrefix(count: number) {
    const token = this.curToken;
    const prefixList = prefixes[count] || [];
    for (const prefix of prefixList) {
      if (token.startsWith(prefix)) {
        return prefix;
      }
    }
    return '';
  }
  private getSuffix(count: number) {
    const token = this.curToken;
    const suffixList = suffixes[count] || [];
    for (const suffix of suffixList) {
      if (token.endsWith(suffix)) {
        return suffix;
      }
    }
    return '';
  }
}
