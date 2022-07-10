import { numAndStr } from '../types'

interface IMomentService {
  create(userId: numAndStr, content: string): any
  getMomentById(momentId: numAndStr): any
  getMomentList(offset: numAndStr, size: numAndStr): any
  update(momentId: numAndStr, content: string): any
  remove(momentId: numAndStr): any
  hasLabel(momentId: numAndStr, labelId: numAndStr): any
  addLabels(momentId: numAndStr, labelId: numAndStr): void
}

export { IMomentService }
