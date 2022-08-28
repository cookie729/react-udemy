import React from "react"
import { ReactDOM } from "react-dom"


export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力"/>
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>aaaaaaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div className="complete-area">
        <p>完了のTODO</p>
          <ul>
            <div>
              <li>aaaaaaaaa</li>
              <button>完了</button>
              <button>戻す</button>
            </div>
          </ul>
      </div>
    </>
  )
}