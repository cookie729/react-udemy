// import "./style.css";


// クリックしたら追加する
const onClickAdd = () => {


  // テキストボックスの値を取得し、初期化する
  // 変数として受け取る為にまずは変数の定義
  // valueを取得することで、add-textのIDが持っている値をinputTextに格納させてくれる
  // add-textという値をinputTextに追加
  const inputText = document.getElementById("add-text").value;
  // テキストボックスを入力して、追加を押すと空になる
  document.getElementById("add-text").value ="";


  createIncompleteList(inputText);
};
 
// 関数を共通化
// 未完了リストから指定の要素を削除
// 渡されたtargetを未完了のリスト(incompleteButton)から削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 戻すボタンの要素を未完了リストに戻す（追加）する関数
const createIncompleteList = (text) => {


   // div生成 
  // javascript上でHTMLのDOMを生成できる
  // テキストボックスを追加した時にliが新たに生成される
  const div = document.createElement("div");
  // list-rowのクラス名もjavascript上で付与する
  div.className = "list-row";
  

  // divタグの生成
  const li = document.createElement("li")
  // innerTextでdivタグの中にテキストボックスの要素を取得
  li.innerText = text;


  // button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // ボタンがクリックでイベント
  // completeButton.addEventListener("click", () => {

    // 完了ボタンをクリックしたら未完了リストから削除して、完了リストへ追加
    completeButton.addEventListener("click", () => {

      // クリックされた削除ボタンの親タグ（div）を未完了リストから削除
      deleteFromIncompleteList(completeButton.parentNode);


      // 完了リストに追加する要素
      const addTarget = completeButton.parentNode;

      // TODOの入力内容テキストを取得
      const text = addTarget.firstElementChild.innerText;
      
      // li以下を初期化
      addTarget.textContent = null;

      // 未完了リストで完了ボタンを押した要素の li タグを生成
      const li = document.createElement("li");
      li.innerText = text;
      
      // 完了リストに未完了リストで完了ボタンを押した要素のボタンを生成
      const backButton = document.createElement("button");
      backButton.innerText ="戻す";

      // テキスト取得
      backButton.addEventListener("click" , () => {

        // 押された戻すボタンの親タグ（div）を完了リストから削除
        // 完了したTODOリストの戻すボタンをクリック時未完了のTODOリストへ戻す
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        
        // 戻すボタンのテキスト取得
        const text = backButton.parentNode.firstElementChild.innerText;
        // createIncompleteに対してtextを渡すと取得したテキストで未完了のTODOを1行作成してくれる。
        createIncompleteList(text);
        
      });




      // divタグの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      // 完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
    });


  // button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // ボタンを押されたら削除
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });


  // liタグの子要素に各要素を設定
  div.appendChild(li)
  div.appendChild(completeButton)
  div.appendChild(deleteButton)


  // 未完了のリストにliタグを子要素として追加
  document.getElementById("incomplete-list").appendChild(div)
};



// add-buttonのIDを取得し,クリックしたらイベントが発生する要素を追加
document.getElementById("add-button").addEventListener("click", () => onClickAdd());

