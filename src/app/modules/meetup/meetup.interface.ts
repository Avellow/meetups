export interface IMeetup {
  id: number
  name: string
  description: string
  location: string
  target_audience: string
  need_to_know: string
  will_happen: string
  reason_to_come: string
  time: string
  duration: number
  createdBy: number
  owner: IOwner
  users: IUser[]
}

export interface IOwner {
  id: number
  email: string
  password: string
  fio: string
}

interface IUser {
  id: number
  email: string
  password: string
  fio: string
}
