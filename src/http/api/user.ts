/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { httpFront, httpOther } from "../instance"

async function experience() {
  const response = await httpOther.post("/log/create", { funcId: "1" })
  return response
}

async function login(params: { phone: string; password: string }) {
  const response = await httpFront.post("/user/login", params)
  return response
}

async function register(params: { phone: string; username: string; password: string }) {
  const response = await httpFront.post("/user/register", params)
  return response
}

async function getUser() {
  const response = await httpFront.get("/user/me")
  return response
}

export default { experience, login, register, getUser }
