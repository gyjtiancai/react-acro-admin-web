/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { IconGithub } from "@arco-design/web-react/icon"

function Github() {
  return (
    <IconGithub onClick={() => openLink("https://github.com/gyjtiancai")} className="cursor-pointer text-2xl mr-4" />
  )
}

function openLink(url: string) {
  window.open(url)
}
export default Github
