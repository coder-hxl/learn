export interface ISystemState {
  userList: any[]
  userCount: number
}

export interface ISystemActions {
  changeUserList(userList: any[]): void
  changeUserCount(userCount: number): void
  getPageListAction(payload: any): void
}
