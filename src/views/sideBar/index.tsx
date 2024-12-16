/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu } from "@arco-design/web-react"
import { IconCalendar, IconSettings, IconFire, IconBook, IconHome } from "@arco-design/web-react/icon"
import { useTranslation } from "react-i18next"
import { useGlobalStore } from "../../store"

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

function SideBar() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { isCollapsed, addRouterHistory } = useGlobalStore()
  const menu = [
    {
      key: "1",
      title: t("基础功能"),
      link: "",
      icon: <IconCalendar />,
      children: [
        {
          key: "/page1",
          title: t("基础功能一"),
          link: "/page1",
          icon: <IconBook />
        },
        {
          key: "/page2",
          title: t("基础功能二"),
          link: "/page2",
          icon: <IconBook />
        }
      ]
    },
    {
      key: "2",
      title: t("系统设置"),
      link: "",
      icon: <IconSettings />,
      children: [
        {
          key: "/page3",
          title: t("系统设置一"),
          link: "/page3",
          icon: <IconBook />
        },
        {
          key: "/page4",
          title: t("系统设置二"),
          link: "/page4",
          icon: <IconBook />
        }
      ]
    }
  ]
  const renderMenu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["1"]}
      defaultSelectedKeys={[location.pathname]}
      onClickMenuItem={(key: string) => addRouterHistory(key)}
      style={{ width: "100%" }}
    >
      <MenuItem
        key="/home"
        onClick={() => {
          addRouterHistory("/home")
          navigate("/home")
        }}
      >
        <IconHome />
        {t("首页")}
      </MenuItem>
      {menu.map((item) => {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                {item.icon}
                {item.title}
              </span>
            }
          >
            {item.children.map((child) => {
              return (
                <MenuItem key={child.key}>
                  <Link to={child.link}>
                    {child.icon}
                    {child.title}
                  </Link>
                </MenuItem>
              )
            })}
          </SubMenu>
        )
      })}
    </Menu>
  )

  return (
    <>
      <div className="flex items-center justify-start pl-4 h-16 border-b border-solid border-gray-20">
        <div className="logo h-8 w-8 rounded flex items-center justify-center flex-shrink-0">
          <IconFire className="text-2xl" style={{ color: "white" }} />
        </div>
        {!isCollapsed && <div className="title text-xl font-bold ml-2">React Acro Admin</div>}
      </div>
      {renderMenu}
    </>
  )
}

export default SideBar
