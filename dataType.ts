// 様々な型まとめ
// :データ型 の部分は型注釈（タイプアノテーション）と言う。無くても型推論という機能で推測してくれるので、そちらが推奨。
let isValid: boolean = true;

// 型推論（推奨）
let hasValue = true;

// numberという型ひとつで、整数、小数、符号付きどれも対応可能
let count: number = 10;
let float: number = 3.14;
let minus: number = -0.12;

// stringはシングルクオート、ダブルクオート、バッククオートどれでも可能
let word: string = "hello";

// 型注釈でオブジェクトに型をつける
const person1: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}

// 型推論でオブジェクトに型をつける
const person2 = {
    name: 'Mike',
    age: 30
}

// 型注釈の配列
const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0]

// Tuple型（型推論はできないので、型注釈必須）
const book: [string, number, boolean] = ['business', 1500, true]

// enum型（大文字で書くのが慣例）
enum CoffeeSize  {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE'
}

// 以下のように書くこともできる。その場合、SHORT=0, TALL=1, GRANDE=2となる。例えば、TALL=100とすると、SHORT=0, TALL=100, GRANDE=101となる。
// enum CoffeeSize  {
//     SHORT,
//     TALL,
//     GRANDE
// }

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

// any型（何でも入るので、なるべく使わない）
let anything: any = true;
anything = 'hello'

// Union型（複数の型を扱う）
let unionType: number | string = 10;
unionType = 'hello'

// Literal型（特定の値のみを扱う）
// constを使い、型注釈を使っていない状態ではLiteral型として推論される。letだとStringとして推論される。
const apple = 'apple'

// letでenumのように使うこともできる
let clothSize: 'small' | 'medium' | 'large' = 'large'

// typeエイリアスで型を変数のように扱うこともできる
type Size = 'small' | 'medium' | 'large'
let drinkSize: Size = 'medium'

// 関数に型をつける（引数や戻り値の型を指定できる）
// 戻り値がない場合はvoid型を使う
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// 型注釈による関数宣言
const anotherAdd: (n1: number, n2: number) => number = add;

// unknown型（何でもいれることができるが、下記のようにtypeofで型を保証した上で使う必要がある）
let unknownInput: unknown;
let text: string;

if (typeof unknownInput === 'string') {
    text = unknownInput;
}

// never型（決して何も返さない関数の戻り値に使う）
function error(message: string): never {
    throw new Error(message);
};
