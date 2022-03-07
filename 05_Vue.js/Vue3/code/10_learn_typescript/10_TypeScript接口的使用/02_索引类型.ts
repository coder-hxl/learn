// 通过interface来定义索引类型
interface IIndexLanguage {
  [index: number]: string
}

const frontLanguage: IIndexLanguage = {
  0: 'HTML',
  1: 'CSS',
  2: 'JavaScript',
  3: 'Vue',
}


interface ILanguageYear {
  [index: string]: Date
}

const languageYear: ILanguageYear = {
  'C': new Date('1972'),
  'Java': new Date('1995'),
  'JavaScript': new Date('1996'),
  'TypeScript': new Date('2014')
}
