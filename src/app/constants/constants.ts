export const prefixes = [
  [],
  ['ل', 'س', 'ب', 'ف', 'و', 'ي', 'ت', 'ن', 'ا'],
  [
    'ال',
    'لل',
    'لي',
    'لت',
    'لن',
    'لا',
    'فل',
    'في',
    'فت',
    'فن',
    'فا',
    'سي',
    'ست',
    'سن',
    'سا',
    'ول',
    'وي',
    'وت',
    'ون',
    'وا',
  ],
  ['وال', 'فال', 'كال', 'بال', 'ولل', 'فلل'],
  ['وكال', 'وبال', 'فبال'],
];

export const suffixes = [
  [],
  ['ة', 'ه', 'ي', 'ك', 'ت', 'ا', 'ن', 'و'],
  [
    'ون',
    'ات',
    'ان',
    'ين',
    'تن',
    'كم',
    'هن',
    'نا',
    'يا',
    'ها',
    'تم',
    'كن',
    'ني',
    'وا',
    'ما',
    'هم',
  ],
  ['تمل', 'همل', 'تان', 'تين', 'كمل'],
];

export const stopWords = [
  'يكون',
  'وليس',
  'وكان',
  'كذلك',
  'التي',
  'وبين',
  'عليها',
  'مساء',
  'الذي',
  'وكانت',
  'ولكن',
  'والتي',
  'تكون',
  'اليوم',
  'اللذين',
  'عليه',
  'كانت',
  'لذلك',
  'أمام',
  'هناك',
  'منها',
  'مازال',
  'لازال',
  'لايزال',
  'مايزال',
  'اصبح',
  'أصبح',
  'أمسى',
  'امسى',
  'أضحى',
  'اضحى',
  'مابرح',
  'مافتئ',
  'ماانفك',
  'لاسيما',
  'ولايزال',
  'الحالي',
  'اليها',
  'الذين',
  'فانه',
  'والذي',
  'وهذا',
  'لهذا',
  'فكان',
  'ستكون',
  'اليه',
  'يمكن',
  'بهذا',
  'الذى',
  'في',
  'من',
  'الى',
  'عن',
  'على',
  'انت',
  'انت',
  'انتما',
  'انتم',
  'انتن',
];

export const vowels = /[\u064B-\u0652]/g;
export const hamzas = /[\u0621\u0623\u0624\u0625\u0626]/g;
export const patterns: { [key: number]: RegExp[] } = {
  7: [
    /\u0627\u0633\u062a(.)(.)\u0627(.)/, // استفعال
  ],
  6: [
    /\u0627\u0633\u062a(.)(.)(.)/, // استفعل
    /\u0645\u0633\u062a(.)(.)(.)/, // مستفعل
    /\u0645(.)\u0627(.)(.)\u0647/, // مفاعلة
    /\u0627(.)\u062a(.)\u0627(.)/, // افتعال
    /\u0627(.)\u0639\u0648(.)(.)/, // افعوعل
    /\u062a(.)\u0627(.)\u064a(.)/, // تفاعيل
    /\u0645(.)\u0627(.)\u064a(.)/, // مفاعيل
    /\u0627(.)(.)(\u064a)\u0627\u0627/, // افعياء
    /(.)(.)(.)\u064a\u0627\u0627/, // فعلياء
    /(.)\u0648\u0627(.)\u064a(.)/, // فواعيل
    /\u0645\u062a(.)\u0627(.)(.)/, // متفاعل
    /\u0627\u0646(.)(.)\u0627(.)/, // انفعال
    /* 64 */
    /\u0627(.)(.)(.)\u0627(.)/, // افعلال
    /\u0645\u062a(.)(.)(.)(.)/, // متفعلل
    /(.)(.)(.)(.)\u0627\u0627/, // فعللاء
  ],
  5: [
    /\u0627(.)\u062a(.)(.)/, // افتعل
    /\u0627(.)\u0627(.)(.)/, // افاعل
    /\u0645(.)(.)\u0648(.)/, // مفعول
    /\u0645(.)(.)\u0627(.)/, // مفعال
    /\u0645(.)(.)\u064a(.)/, // مفعيل
    /\u0645(.)(.)(.)\u0647/, // مفعلة
    /\u062a(.)(.)(.)\u0647/, // تفعلة
    /\u0627(.)(.)(.)\u0647/, // أفعلة
    /\u0645(.)\u062a(.)(.)/, // مفتعل
    /\u064a(.)\u062a(.)(.)/, // يفتعل
    /\u062a(.)\u062a(.)(.)/, // تفتعل
    /\u0645(.)\u0627(.)(.)/, // مفاعل
    /\u062a(.)\u0627(.)(.)/, // تفاعل
    /(.)(.)\u0648(.)\u0647/, // فعولة
    /(.)(.)\u0627(.)\u0647/, // فعالة
    /\u0627\u0646(.)(.)(.)/, // انفعل
    /\u0645\u0646(.)(.)(.)/, // منفعل
    /\u0627(.)(.)\u0627(.)/, // افعال
    /(.)(.)(.)\u0627\u0646/, // فعلان
    /\u062a(.)(.)\u064a(.)/, // تفعيل
    /(.)\u0627(.)\u0648(.)/, // فاعول
    /(.)\u0648\u0627(.)(.)/, // فواعل
    /(.)(.)\u0627\u0626(.)/, // فعائل
    /(.)\u0627(.)(.)\u0647/, // فاعلة
    /(.)(.)\u0627(.)\u064a/, // فعالي
    /(.)(.)(.)\u0627\u0627/, // فعلاء

    /\u062a\u0645(.)(.)(.)/, // تمفعل

    /* 54 */
    /\u0645(.)(.)(.)(.)/, // مفعلل
    /\u062a(.)(.)(.)(.)/, // تفعلل
    /\u0627(.)(.)(.)(.)/, // افعلل
    /(.)(.)(.)(.)\u0647/, // فعللة
    /(.)(.)\u0627(.)(.)/, // فعالل
    /(.)(.)(.)\u0648(.)/, // فعلول
  ],
  4: [
    /\u0645(.)(.)(.)/, // مفعل
    /(.)\u0627(.)(.)/, // فاعل
    /(.)(.)\u0648(.)/, // فعول
    /(.)(.)\u064a(.)/, // فعيل
    /(.)(.)\u0627(.)/, // فعال
    /(.)(.)(.)\u0647/, // فعلة

    /\u0627(.)(.)(.)/, // افعل
    /\u062a(.)(.)(.)/, // تفعل
    /(.)\u0648(.)(.)/, // فوعل
    /(.)\u064a(.)(.)/, // فيعل
    /(.)(.)(.)\u0646/, // فعلن
  ],
  3: [/(.)(.)(.)/],
};

export const patternsStrings: { [key: number]: string[] } = {
  7: ['استفعال'],
  6: [
    'استفعل',
    'مستفعل',
    'مفاعلة',
    'افتعال',
    'افعوعل',
    'تفاعيل',
    'مفاعيل',
    'افعياء',
    'فعلياء',
    'فواعيل',
    'متفاعل',
    'انفعال',
    /* 64 */
    'افعلال',
    'متفعلل',
    'فعللاء',
  ],
  5: [
    'افتعل',
    'افاعل',
    'مفعول',
    'مفعال',
    'مفعيل',
    'مفعلة',
    'تفعلة',
    'أفعلة',
    'مفتعل',
    'يفتعل',
    'تفتعل',
    'مفاعل',
    'تفاعل',
    'فعولة',
    'فعالة',
    'انفعل',
    'منفعل',
    'افعال',
    'فعلان',
    'تفعيل',

    'فاعول',
    'فواعل',
    'فعائل',
    'فاعلة',
    'فعالي',
    'فعلاء',

    'تمفعل',

    /* 54 */
    'مفعلل',
    'تفعلل',
    'افعلل',
    'فعللة',
    'فعالل',
    'فعلول',
  ],
  4: [
    'مفعل',
    'فاعل',
    'فعول',
    'فعيل',
    'فعال',
    'فعلة',

    'افعل',
    'تفعل',
    'فوعل',
    'فيعل',
    'فعلن',
  ],
  3: ['فعل'],
};