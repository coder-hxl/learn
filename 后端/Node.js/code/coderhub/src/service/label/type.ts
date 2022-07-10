import { numAndStr } from '../types'

interface ILabelService {
  create(name: string): void
  getLabelByName(name: string): void
  getLabelList(limit: numAndStr, offset: numAndStr): void
}

export { ILabelService }
