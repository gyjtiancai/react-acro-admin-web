/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */

declare module "@arco-design/color" {
  type Color = string

  interface GenerateOptions {
    list?: boolean
    dark?: boolean
  }

  function generate(color: Color, options?: GenerateOptions): Color[]

  function getRgbStr(color: Color): string

  interface ColorList {
    [key: string]: Color
  }

  interface PresetColors {
    [key: string]: {
      light: Color[]
      dark: Color[]
      primary: Color
    }
  }

  export { generate, getRgbStr }

  export function getPresetColors(): PresetColors

  export const colorList: ColorList
}
