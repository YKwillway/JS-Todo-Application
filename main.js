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
const name = "川端雄介";
const age = 29;

const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// バッククォートのショートカット -> shift @
const message2 = `私の名前は${name}です。年齢は${age}です。`
console.log(message2);