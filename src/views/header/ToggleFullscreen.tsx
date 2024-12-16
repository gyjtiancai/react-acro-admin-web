/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useState } from "react"
import { IconFullscreen, IconFullscreenExit } from "@arco-design/web-react/icon"

function ToggleFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    } else {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    }
  }

  return isFullscreen ? (
    <IconFullscreenExit onClick={toggleFullscreen} className="cursor-pointer text-2xl mr-4" />
  ) : (
    <IconFullscreen onClick={toggleFullscreen} className="cursor-pointer text-2xl mr-4" />
  )
}

export default ToggleFullscreen
