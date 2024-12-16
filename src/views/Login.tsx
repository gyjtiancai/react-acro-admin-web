/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ConfigProvider, Input, Button } from "@arco-design/web-react"
import { IconFire, IconUser, IconLock } from "@arco-design/web-react/icon"
import zhCN from "@arco-design/web-react/es/locale/zh-CN"
import enUS from "@arco-design/web-react/es/locale/en-US"
import { useGlobalStore } from "../store"
import { userRequest } from "../http/api"

function Login() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const { theme, locale } = useGlobalStore()
  function toggleTheme() {
    theme.map((x, i) => {
      document.body.style.setProperty("--primary-" + (i + 1), x)
    })
  }
  const { i18n, t } = useTranslation()
  const [localeConfig, setLocaleConfig] = useState(zhCN)

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/home")
    toggleTheme()
    i18n.changeLanguage(locale)
    switch (locale) {
      case "zh":
        setLocaleConfig(zhCN)
        break

      case "en":
        setLocaleConfig(enUS)
        break

      default:
        setLocaleConfig(zhCN)
        break
    }
  }, [])

  async function login() {
    const res = await userRequest.login({ phone, password })
    const token = `Bearer ${res.data}`
    localStorage.setItem("token", token)
    navigate("/home")
  }
  async function experience() {
    localStorage.setItem("experience", "true")
    navigate("/home")
    userRequest.experience()
  }
  return (
    <ConfigProvider locale={localeConfig}>
      <div
        style={{ background: "linear-gradient(135deg, #e0f7fa, #ffffff)" }}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="max-w-3xl min-w-80 shadow-2xl p-8 flex items-center">
          <img className="w-72 mr-4" src="/src/assets/image/cat.png" />
          <div>
            <div className="flex items-center justify-center border-gray-20">
              <div className="logo h-12 w-12 rounded flex items-center justify-center flex-shrink-0">
                <IconFire className="text-3xl" style={{ color: "white" }} />
              </div>
              <div className="title text-2xl font-bold ml-4">React Acro Admin</div>
            </div>
            <div className="mt-8 w-72">
              <Input
                value={phone}
                onChange={(v) => {
                  setPhone(v)
                }}
                size="large"
                prefix={<IconUser />}
                allowClear
                placeholder={t("请输入手机号")}
              />
            </div>
            <div className="mt-5 w-72">
              <Input.Password
                value={password}
                onChange={(v) => {
                  setPassword(v)
                }}
                size="large"
                prefix={<IconLock />}
                allowClear
                placeholder={t("请输入密码")}
              />
            </div>
            <div className="flex items-center justify-between mt-8">
              <Button type="outline" size="large" onClick={experience}>
                {t("一键体验")}
              </Button>
              <Button type="outline" size="large" onClick={() => navigate("/register")}>
                {t("注册")}
              </Button>
              <Button type="primary" size="large" onClick={login}>
                {t("登录")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Login
