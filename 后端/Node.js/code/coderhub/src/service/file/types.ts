interface IFileService {
  createAvatar(
    filename: string,
    mimetype: string,
    size: number,
    userId: number
  ): any
  getAvatarById(id: string): any
  updateAvatarById(
    filename: string,
    mimetype: string,
    size: number,
    userId: string
  ): any
  createfile(
    filename: string,
    mimetype: string,
    size: number,
    momentId: string,
    userId: number
  ): any
  getFileByFilename(name: string): any
}

export { IFileService }
