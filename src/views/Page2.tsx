/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useTranslation } from "react-i18next"
function Page2() {
  const { t } = useTranslation()
  return <div>{t("页面二")}</div>
}

export default Page2
