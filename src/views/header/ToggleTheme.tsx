/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useEffect } from "react"
import { ColorPicker } from "@arco-design/web-react"
import { generate, getRgbStr } from "@arco-design/color"
import { useGlobalStore } from "../../store"

function ToggleTheme() {
  const { color, theme, setTheme } = useGlobalStore()
  function toggleTheme() {
    theme.map((x, i) => {
      document.body.style.setProperty("--primary-" + (i + 1), x)
    })
  }
  useEffect(() => {
    toggleTheme()
  }, [color])
  return (
    <ColorPicker
      defaultValue={color}
      onChange={(color) => {
        const list = generate(color, {
          list: true
        }).map((x) => getRgbStr(x))
        setTheme(color, list)
        list.map((x, i) => {
          document.body.style.setProperty("--primary-" + (i + 1), x)
        })
      }}
      className="mr-4"
    />
  )
}

export default ToggleTheme
