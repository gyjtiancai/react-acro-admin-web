/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface GlobalStore {
  siderWidth: number
  setSiderWidth: (siderWidth: number) => void
  isCollapsed: boolean
  setIsCollapsed: (isCollapsed: boolean) => void
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
  locale: string
  localeName: string
  setLocale: (locale: string) => void
  setLocaleName: (localeName: string) => void
  color: string
  theme: string[]
  setTheme: (color: string, theme: string[]) => void
  routerHistory: string[]
  setRouterHistory: (routerPaths: string[]) => void
  addRouterHistory: (routerPath: string) => void
  delRouterHistory: (routerPath: string) => void
}

const useGlobalStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      siderWidth: 250,
      setSiderWidth: (_siderWidth: number) => {
        set({ siderWidth: _siderWidth })
      },
      isCollapsed: false,
      setIsCollapsed: (_isCollapsed: boolean) => {
        set({ isCollapsed: _isCollapsed })
      },
      isDarkMode: false,
      setIsDarkMode: (_isDarkMode: boolean) => {
        set({ isDarkMode: _isDarkMode })
      },
      locale: "zh",
      localeName: "简体中文",
      setLocale: (_locale: string) => {
        set({ locale: _locale })
      },
      setLocaleName: (_localeName: string) => {
        set({ localeName: _localeName })
      },
      color: "#165DFF",
      theme: [],
      setTheme: (_color: string, _theme: string[]) => {
        set({ color: _color, theme: _theme })
      },
      routerHistory: [],
      setRouterHistory: (_routerHistory: string[]) => {
        set({ routerHistory: _routerHistory })
      },
      addRouterHistory: (_routerPath: string) => {
        if (get().routerHistory.includes(_routerPath)) return
        set((state) => ({ routerHistory: [...state.routerHistory, _routerPath] }))
      },
      delRouterHistory: (_routerPath: string) => {
        set((state) => ({
          routerHistory: state.routerHistory.filter((x) => x !== _routerPath)
        }))
      }
    }),
    {
      name: "global-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useGlobalStore
