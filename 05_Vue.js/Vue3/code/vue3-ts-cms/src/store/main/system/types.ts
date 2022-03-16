export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
}

export interface ISystemActions {
  changeUsersList(usersList: any[]): void
  changeUsersCount(usersCount: number): void
  changeRoleList(roleList: any[]): void
  changeRoleCount(roleCount: number): void
  getPageListAction(payload: any): void
}
