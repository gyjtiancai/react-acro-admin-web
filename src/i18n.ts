/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          访问页面不存在: "The page you are accessing does not exist",
          首页: "Home",
          页面一: "Page One",
          页面二: "Page Two",
          页面三: "Page three",
          页面四: "Page four",
          基础功能: "Basic Function",
          基础功能一: "Basic Function One",
          基础功能二: "Basic Function Two",
          系统设置: "System Setting",
          系统设置一: "System Setting One",
          系统设置二: "System Setting Two",

          "欢迎使用 React Acro Admin 🎉": "Welcome to React Acro Admin 🎉",
          "种一棵树最好的时间是十年前，其次是现在。": "The best time to plant a tree was ten years ago, followed by now",
          请输入手机号: "Please enter your mobile number",
          请输入用户名: "Please enter your username",
          请输入密码: "Please enter your password",
          一键体验: "Experience",
          返回登录: "Login",
          注册: "Register",
          登录: "Login",
        }
      },
      zh: {
        translation: {
          访问页面不存在: "访问页面不存在",
          首页: "首页",
          页面一: "页面一",
          页面二: "页面二",
          页面三: "页面三",
          页面四: "页面四",
          基础功能: "基础功能",
          基础功能一: "基础功能一",
          基础功能二: "基础功能二",
          系统设置: "系统设置",
          系统设置一: "系统设置一",
          系统设置二: "系统设置二",

          "欢迎使用 React Acro Admin 🎉": "欢迎使用 React Acro Admin 🎉",
          "种一棵树最好的时间是十年前，其次是现在。": "种一棵树最好的时间是十年前，其次是现在。",
          请输入手机号: "请输入手机号",
          请输入用户名: "请输入用户名",
          请输入密码: "请输入密码",
          一键体验: "一键体验",
          返回登录: "返回登录",
          注册: "注册",
          登录: "登录",
        }
      }
    },
    lng: "zh", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  })

export default i18n
