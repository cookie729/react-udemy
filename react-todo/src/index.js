// Reactを使う場合はReactをimportする必要がある（jsxを使用するだけの場合Reactのimportは必須ではなくなった）
import React from "react";
// jsはHTMLコンポーネントを反映させていく必要がある為、ReactDomもimportする
import ReactDOM from "react-dom";
import { App } from "./App";

// // Appを画面に反映させる
// // ReactDomのrender()関数を使用
// // render関数の第一引数にAppをコンポーネントとしてレンダリングするという意味でHTMLのタグのようにAppをかく
// // 第二引数としてどこに反映していくのかを書く為、HTMLのrootのIDを取得
ReactDOM.render(<App />, document.getElementById("root"));