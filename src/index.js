// オブジェクトを定義
// myProfileというオブジェクトの中にname,ageを設定
// const myProfile = {
//   name: "kouki",
//   age:28,
// };


// myProfileのオブジェクトからnameとageを取り出す
// const {} = 何から取り出すか→myProfile
// const {name, age} = myProfile;

// 分割代入は最初にオブジェクトで指定したプロパティを抜き出して自由に使える
// const message2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 分割代入はオブジェクトだけなく配列にも使える
// 0番目=kouki, 1番目=31
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);


// 配列で分割代入もできる
const myProfile = ['kouki', '31'];
// myProfileから配列[]で受け取る
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です`;
console.log(message4);