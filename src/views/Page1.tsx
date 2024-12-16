/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useTranslation } from "react-i18next"
import { Empty  } from "@arco-design/web-react"
function Page1() {
  const { t } = useTranslation()
  return <div><Empty></Empty>{t("页面一")}</div>
}

export default Page1
