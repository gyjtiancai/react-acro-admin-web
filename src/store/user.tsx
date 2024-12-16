/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { create } from "zustand"

interface User {
  id: string
  username: string
  phone: string
  avatar: string
}
interface UserStore {
  user: User
  setUser: (_user: User) => void
}

const useUserStore = create<UserStore>()((set) => ({
  user: {
    id: "",
    username: "admin",
    phone: "",
    avatar: ""
  },
  setUser: (_user) => {
    set(() => ({ user: _user }))
  }
}))

export default useUserStore
