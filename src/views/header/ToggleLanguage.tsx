/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { Menu, Button, Dropdown } from "@arco-design/web-react"
import { IconDown } from "@arco-design/web-react/icon"
import { useGlobalStore } from "../../store"

const menuConfig = [
  { id: "zh", name: "简体中文" },
  { id: "en", name: "English" }
]
const localeMap: { [key: string]: string } = {}
for (const menu of menuConfig) {
  localeMap[menu.id] = menu.name
}

function ToggleLanguage() {
  const { localeName, setLocale, setLocaleName } = useGlobalStore()
  function toggleLocale(locale: string) {
    setLocale(locale)
    setLocaleName(localeMap[locale])
  }
  const dropList = (
    <Menu>
      {menuConfig.map((menu) => {
        return (
          <Menu.Item key={menu.id} onClick={() => toggleLocale(menu.id)}>
            {menu.name}
          </Menu.Item>
        )
      })}
    </Menu>
  )
  return (
    <Dropdown droplist={dropList} position="bottom">
      <Button type="text">
        {localeName}
        <IconDown />
      </Button>
    </Dropdown>
  )
}

export default ToggleLanguage
