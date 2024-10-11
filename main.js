// var -> 上書き可, 再宣言可
var val1 = 'var変数';
console.log(val1);

val1 = 'ababa';
console.log(val1);

var val1 = 'bahaha';
console.log(val1);

// let -> 上書き可, 再宣言不可
let val2 = 'let変数';
console.log(val2);

val2 = 'uhaha';
console.log(val2);

// const -> 上書き不可, 再宣言不可
const val3 = 'const変数';
console.log(val3);

const val4 = {
  name: '川端雄介',
  age: 29,
};
console.log(val4);

val4.name = 'Yusuke Kawabata';
val4.address = 'Chiba';
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ['dog', 'cat'];
console.log(val5);

val5[0] = 'bird';
console.log(val5);

val5[4] = 'gorilla';
console.log(val5);

val5[2] = 'geraff';
console.log(val5);

/**
 * テンプレートの文字列
 */
const name1 = "川端雄介";
const age1 = 29;

const message1 = "私の名前は" + name1+ "です。年齢は" + age1 + "です。";
// console.log(message1);

// バッククォートのショートカット -> shift @
const message2 = `私の名前は${name1}です。年齢は${age1}です。`
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
const func1 = function func1(str) {
  return str;
}
console.log(func1("func1です"));

const func2 = (str) => {
  return str;
}
// 引数が1つの場合、最初の括弧は省略可
// const func2 = str => {
//   return str;
// }

// 引数が1つの場合、{}とreturn句を省略可
// const func2 = str => str;
console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// const func3 = (num1, num2) => num1 + num2;

// 1行で且つオブジェクトを返却値としたい場合、({})で囲う
const func3 = (num1, num2) => ({
  hoge: num1,
  fuga: num2,
});
console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "川端雄介",
//   age: 29
// };
// const { name, age } = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

const myProfile = ["川端雄介", 29];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// 参照する時の変数名を自由に決めることができる
const [name, age] = myProfile;
const message3 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message3);

/**
 * デフォルト値(引数, 分割代入)
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
sayHello("川端雄介");

const myProfile2 = {
  age2: 29
};
const { age2, name2 } = myProfile2;
console.log(age2);
console.log(name2);

/**
 * オブジェクトの省略記法
 */
const name3 = "川端雄介";
const age3 = 29;
// 設定するプロパティと割り当てる変数名が同一の時は「: 変数名」を省略可
const myProfile3 = {
  name3,
  age3
};

/**
 * スプレッド構文
 * 先頭に「...」を付けると配列の中身を展開してくれる
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const arr1 = [1, 2];
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1)

// 分割代入の際に残りをまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1)
console.log(num2)
console.log(arr3)

// 配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 以下の参照を代入する形のコピーはコピー元とコピー先の変数が相互に影響しあうため、
// 値の書き換えが発生した際に思わぬ不具合を発生する場合が出てくる
// const arr8 = arr4;
// console.log(arr8);
// arr4[0] = 100;
// console.log(arr8);
