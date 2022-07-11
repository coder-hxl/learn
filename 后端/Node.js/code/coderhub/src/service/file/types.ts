interface IFileService {
  createAvatar(
    fieldname: string,
    mimetype: string,
    size: number,
    userId: number
  ): any
}

export { IFileService }
