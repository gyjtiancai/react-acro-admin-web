/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon"
import { useGlobalStore } from "../../store"
function ToggleSider() {
  const { isCollapsed, setIsCollapsed, setSiderWidth } = useGlobalStore()

  return (
    <div className="cursor-pointer ml-6 flex items-center">
      {isCollapsed ? (
        <IconMenuUnfold
          onClick={() => {
            setIsCollapsed(false)
            setSiderWidth(250)
          }}
          className="text-2xl"
        />
      ) : (
        <IconMenuFold onClick={() => setIsCollapsed(true)} className="text-2xl" />
      )}
    </div>
  )
}

export default ToggleSider
