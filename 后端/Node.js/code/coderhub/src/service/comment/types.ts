import { numAndStr } from '../types'

interface ICommentService {
  create(content: numAndStr, momentId: numAndStr, userId: numAndStr): void
  reply(
    content: numAndStr,
    momentId: numAndStr,
    userId: numAndStr,
    commentId: numAndStr
  ): void
  update(content: numAndStr, id: numAndStr): void
  remove(id: numAndStr): void
}

export { ICommentService }
