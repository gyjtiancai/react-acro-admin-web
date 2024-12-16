/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { useTranslation } from "react-i18next"
import { Button, Spin } from "@arco-design/web-react"
import { useState } from "react"
import { useHttpClient, HttpClient, sleep } from "@geyj/web-utils"
const data = [
  {
    id: 1,
    name: "长"
  },
  {
    id: 2,
    name: "宽"
  },
  {
    id: 3,
    name: "高"
  },
  {
    id: 4,
    name: "+"
  },
  {
    id: 5,
    name: "-"
  },
  {
    id: 6,
    name: "*"
  },
  {
    id: 7,
    name: "/"
  },
  {
    id: 8,
    name: "="
  }
]

interface Row {
  id: number
  name: string
}
const httpFront: HttpClient = useHttpClient({ baseURL: "https://ai.biniu.cn" })

function Page3() {
  const { t } = useTranslation()
  const [result, setResult] = useState<Row[]>([])
  const [steps, setSteps] = useState<Row[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  async function calc(action: string) {
    setResult([])
    setSteps([])
    setLoadingText("AI思考中...")
    setLoading(true)
    const response = await httpFront.post("/openai/gpt_4o_mini", {
      messages: [
        {
          role: "user",
          content: `${data}\n这是所有指标和运算符的json数据集合。\n接下来我想让你在这份数据的基础上，帮我${action}，并且以我给你的数据结构返回给我，不需要任何解释说明，且精准匹配id和name。
  例如：立方体 的体积公式为 长 * 宽 * 高，就返回[{"id":1, "name":"长"}, {"id":6, "name": "*"}, {"id":2, "name": "宽"}, {"id":6, "name": "*"}, {"id":3, "name": "高"}]`
        }
      ]
    })
    const aiRes = JSON.parse(response.data)
    setResult(aiRes)
    // setSteps(aiRes)
    setLoadingText("自动化配置公式中...")
    setLoading(true)
    for (const item of aiRes) {
      await sleep(3000)
      document.getElementById(`${item.id}`)?.click()
    }
    setLoading(false)
    return response
  }
  return (
    <div className="w-full h-full">
      <Spin tip={loadingText} loading={loading} className="w-full h-full">
        {/* <div>{t("页面三")}</div> */}
        <div className="font-bold">指标集合</div>
        <div className="flex flex-wrap" style={{ marginTop: "10px" }}>
          {data.map((item) => {
            return (
              <div
                id={`${item.id}`}
                key={item.id}
                style={{ marginRight: "10px" }}
                onClick={() => setSteps([...steps, item])}
              >
                <Button type="outline">{item.name}</Button>
              </div>
            )
          })}
        </div>
        <Button type="primary" style={{ marginTop: "20px" }} onClick={() => calc("配置 立方体 一个面的面积公式")}>
          配置“立方体”一个面的面积公式
        </Button>
        <Button
          type="primary"
          style={{ marginTop: "20px", marginLeft: "20px" }}
          onClick={() => calc("配置 立方体 的体积公式")}
        >
          配置“立方体”的体积公式
        </Button>
        <div className="font-bold" style={{ marginTop: "20px" }}>
          AI返回结果
        </div>
        <div className="flex flex-wrap" style={{ marginTop: "10px" }}>
          {result.map((item, index) => {
            return <div key={index}>{item.name}</div>
          })}
        </div>
        <div>{JSON.stringify(result)}</div>

        <div className="font-bold" style={{ marginTop: "20px" }}>
          自动化执行结果
        </div>
        <div className="flex flex-wrap" style={{ marginTop: "10px" }}>
          {steps.map((item, index) => {
            return (
              <div key={index} style={{ marginRight: "10px" }}>
                <Button type="outline">{item.name}</Button>
              </div>
            )
          })}
        </div>
        <div>{JSON.stringify(steps)}</div>
      </Spin>
    </div>
  )
}

export default Page3
