interface IFileService {
  createAvatar(
    filename: string,
    mimetype: string,
    size: number,
    userId: number
  ): any
  getAvatarById(id: string): any
  deleteAvatarById(id: string): any
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
