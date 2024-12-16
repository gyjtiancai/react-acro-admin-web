/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useRouteError } from "react-router-dom"
import { Empty } from "@arco-design/web-react"
import { useTranslation } from "react-i18next"
import NotFoundPng from "../assets/image/404.png"
import './ErrorPage.css'
function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-center h-screen">
      <Empty imgSrc={NotFoundPng} description={t("访问页面不存在")} />
    </div>
  )
}

export default ErrorPage
