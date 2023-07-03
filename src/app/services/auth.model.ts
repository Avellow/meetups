export interface IAuthResponseData {
  token: string;
}

export interface IAuthUser {
  email: string
  id: number
  roles: IRole[]
  iat: number
  exp: number
}

export interface IRole {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  UserRole: IUserRole
}

export interface IUserRole {
  id: number
  userId: number
  roleId: number
  createdAt: string
  updatedAt: string
}