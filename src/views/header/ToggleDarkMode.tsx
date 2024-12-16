/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useEffect } from "react"
import { IconSun, IconMoon } from "@arco-design/web-react/icon"
import { useGlobalStore } from "../../store"
function toggleAcroTheme(isDarkMode: boolean) {
  if (isDarkMode) {
    document.body.setAttribute("arco-theme", "dark")
  } else {
    document.body.removeAttribute("arco-theme")
  }
}
function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useGlobalStore()
  useEffect(() => {
    toggleAcroTheme(isDarkMode)
  }, [isDarkMode])
  return isDarkMode ? (
    <IconMoon onClick={() => setIsDarkMode(false)} className="cursor-pointer text-2xl mr-4" />
  ) : (
    <IconSun onClick={() => setIsDarkMode(true)} className="cursor-pointer text-2xl mr-4" />
  )
}

export default ToggleDarkMode
