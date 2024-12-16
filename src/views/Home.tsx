/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useTranslation } from "react-i18next"
import { Card, Grid, Image } from "@arco-design/web-react"
import qq from "../assets/image/qq.png"
import wx from "../assets/image/wx.png"
import wx_pay from "../assets/image/wx_pay.png"
import zfb from "../assets/image/zfb.png"

const Row = Grid.Row
const Col = Grid.Col

const extra = null

function Home() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full">
      <Row gutter={20} className={"mb-4"}>
        <Col span={24} className={"text-xl font-bold"}>
          {t("欢迎使用 React Acro Admin 🎉")}
        </Col>
      </Row>
      <Row gutter={20} className={"mb-4"}>
        <Col span={24}>{t("种一棵树最好的时间是十年前，其次是现在。")}</Col>
      </Row>
      <Row gutter={20} className={"mb-4"}>
        <Col span={12}>
          <Card title="特性" extra={extra} bordered={true}>
            <ul>
              <li>✨ 支持 i18n 语言国际化</li>
              <li>✨ 支持暗黑模式</li>
              <li>✨ 支持主题定制</li>
              <li>✨ 支持全屏切换</li>
              <li>✨ 路由持久化管理</li>
              <li>✨ 状态持久化</li>
              <li>✨ ...</li>
            </ul>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="技术栈" extra={extra} bordered={true}>
            <ul>
              <li>✨ 使用 Vite 构建</li>
              <li>✨ 使用 Typescript 编写</li>
              <li>✨ 使用 React 框架</li>
              <li>✨ 使用 Tailwindcss Css框架</li>
              <li>✨ 集成 React路由，扁平化路由设计</li>
              <li>✨ 集成 Zustand 状态管理，支持状态持久化</li>
              <li>✨ 集成 AcroDesign 企业级组件库，智能设计体系，连接轻盈体验</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={20} className={"mb-4"}>
        <Col span={24}>
          <Card title="付费咨询服务" extra={extra} bordered={true}>
            <ul>
              <li>服务内容：系统问题和其他技术相关咨询。</li>
              <li>服务价格：99 元/年 或 28 元/次</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={20} className={"mb-4"}>
        <Col span={12}>
          <Card title="联系作者" extra={extra} bordered={true}>
            <div>扫码或者输入号码添加好友</div>
            <br />
            <div className="flex items-center">
              <div className="text-center">
                <Image className="w-40" src={wx} />
                <div>微信：yjyjyjyjgyj</div>
              </div>
              <div className="text-center">
                <Image className="w-40" src={qq} />
                <div>QQ：961211746</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="打赏作者" extra={extra} bordered={true}>
            <div>如果您觉得本项目对您有帮助，请作者喝杯咖啡。</div>
            <div>您的支持是作者开源的动力。</div>
            <div className="flex items-center">
              <div className="text-center">
                <Image className="w-40" src={wx_pay} />
                <div>微信</div>
              </div>
              <div className="text-center">
                <Image className="w-40" src={zfb} />
                <div>支付宝</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
