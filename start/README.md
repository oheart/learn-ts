## 搭建typescript开发环境
1. 在线compiler
https://www.typescriptlang.org/play/index.html

2. 本地compiler
- 安装ts: npm install -g typescrip
- 查看ts版本：tsc -v
- 新建Hello.ts文件
- 运行：tsc Hello.ts

## 字符串新特性
1. 多行字符串
```ts
var content = `aaa
            bbb
            ccc`;
```
2. 字符串模版
```ts
var myname = 'zhang liang';
var getName = function(){
    return 'zhang liang';
}
console.log(`hello ${myname}`);
console.log(`hello ${getName}`);
console.log(`<div>
    <span>${myname}</span>
    <span>${getName}</span>
    <div>xxx</div>
</div>`);
```
3. 自动拆分字符串
```ts
function test(tpl, name, age){
    console.log(tpl);
    console.log(name);
    console.log(age);
}

var myname = 'zhang liang';
var getAge = function(){
    return 18;
}

test`hello my name is ${myname}, i'm ${getAge()}`
```
## 参数新特性
1. 参数类型(在参数名称后面使用冒号来指定参数的类型)
```ts
var myname:string = 'zhang liang';
myname = 13; // error
myname = '13'; 

var alias = 'xixi';
alias = 13;  // error
alias = '13';

var alias2: any = 'xixi';
alias2 = 13;

var age:number = 13;

var man:boolean = true;

function test(): void{  // error
    return '';
}

function test1(): string{
    return '';
}

function test2(name: string): string{
    return ''
}
test2(1);  // error
test2('1'); 


class Person{ // 自定义类型
    name: string;
    age: number;
}

var zhangsan: Person = new Person();
zhangsan.name = 'zhangsan';
zhangsan.age = 18;
```
2. 参数默认值(在参数声明后面用等号来指定参数的默认值)
```ts
var myname: string = 'zhang liang';

function test(a: string, b: string, c: string = 'jojo'){   //  带默认值的参数要声明在最后面
    console.log(a);
    console.log(b);
    console.log(c);
}

test("xxx", "yyy", "zzz");
test("xxx", "yyy");
```
3. 可选参数(在方法的参数声明后面用问号来标明该参数为可选参数)
```ts
function test(a: string, b?: string, c: string = 'jojo'){  // 可选参数必须声明在必选参数后面
    console.log(a);
    console.log(b);
    console.log(c);
}
test('x');
```
## 函数新特性
1. Rest and Spread操作符（用来声明任意数量的方法参数）
```ts
function func1(...args){
    args.forEach(function(arg){
        console.log(arg);
    })
}

func1(1,2)
func1(3,4,5,6)
```

```ts
function func1(a, b, c){
console.log(a)
console.log(b)
console.log(c)
}
var args1 = [1,2];
var args2 = [4,5,6,7];

func1(...args1)
func1(...args2)
```
2. generator函数（控制函数的执行过程，手工暂停和恢复代码执行）
```ts
function* doSomething(){
    console.log("start");
    yield;
    console.log("finish");
}
var func1 = doSomething();
func1.next();  // start

func1.next(); // finish
```
```ts
function* getStockPrice(stock){
    while(true){
        yield Math.random()*100;
    }
}

var priceGenerator = getStockPrice("IBM");
var limitPrice = 15;
var price = 100;

while(price > limitPrice){
    price = priceGenerator.next().value;
    console.log(`the generator return ${price}`)
}
console.log(`buying at ${price}`);
```
3. destructuring析构表达式（通过表达式将对象或者数组拆解成任意数量的变量）
对象
```ts
function getStock(){
    return {
        code: 'IBM',
        price: 100
    }
}
var {code, price} = getStock();
console.log(code);
console.log(price);
```
嵌套对象
```ts
function getStock(){
    return {
        code: 'IBM',
        price: {
            price1: 200,
            price2: 400
        }
    }
}
var {code, price:{price2}} = getStock();
console.log(code);
console.log(price2);
```
数组
```ts
var arr1 = [1, 2, 3, 4];
var [num1, num2] = arr1;
console.log(num1);
console.log(num2);
```
```ts
var arr1 = [1, 2, 3, 4];
var [, , num1, num2] = arr1;
console.log(num1);
console.log(num2);
```
```ts
var arr1 = [1, 2, 3, 4];
var [num1, num2, ...others] = arr1;
console.log(num1);
console.log(num2);
console.log(others);
```
```ts
var arr1 = [1, 2, 3, 4];

function doSomething([num1, num2, ...others]){
    console.log(num1);
    console.log(num2);
    console.log(others);
}
doSomething(arr1);
```
## 表达式与循环
1. 箭头表达式（解决js中this指向问题）
```ts
function getStock(name: string){
    this.name = name;
    setInterval(() => {
        console.log("name is:" + this.name);
    },1000)
}
var stock = new getStock("IBM");
```
```ts
var sum = (arg1, arg2) => arg1 + arg2;
var sum2 = arg1 => {
    console.log(arg1);
};
```
查找偶数
```ts
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(value => value%2 == 0));
```
2. for of 循环 (forEach, for in, for of比较)
- forEach（forEach会忽略属性值；不支持break,every支持；）
```ts
var myArray = [1, 2, 3, 4];
myArray.desc = "four number";
myArray.forEach(value => console.log(value));
```
- for in（会把属性也循环出来）
```ts
var myArray = [1, 2, 3, 4];
myArray.desc = "four number";
for(var n in myArray){
    console.log('key:', n);
    console.log('value:', myArray[n]);
}
```
- for of（不会把属性循环出来; 支持break;）
```ts
var myArray = [1, 2, 3, 4];
myArray.desc = "four number";
for(var n of myArray){
   if(n>2) break;
    console.log(n);
}
```
```ts
for(var n of "four number"){
    console.log(n);
}
```
## 面向对象特性
1. 类
类是Typescript的核心，使用TypeScript开发时，大部分代码都是写在类里面的
- 类的定义
```ts
class Person{
    name;
    eat(){
        console.log("I'm eating");
    }
}

var p1 = new Person();
p1.name = "batman";
p1.eat();

var p2 = new Person();
p2.name = "superman";
p2.eat();
```
- 类的访问控制符 (public, private, protected)
- 构造函数
constructor在类实例化（new Person）的时候执行一次。
```ts
class Person{
     constructor(public name: string){
     }
     eat(){
        console.log(this.name);
    }
}

var p1 = new Person("batman");
p1.eat();

var p2 = new Person("superman");
p2.eat();
```
- 类的继承(extends, super)  
extends
```ts
class Person{
     constructor(public name: string){
     }
     eat(){
        console.log(this.name);
    }
}

class Employee extends Person{
    code: string;
    work(){
        console.log('work');
    }
}

var e1 = new Employee("name");
e1.eat();
e1.work();
```

super: 子类的构造函数必须调用父类的构造函数; 调用父类的其他方法；
```ts
class Employee extends Person{
    constructor(name:string, code:string){
        super(name);
        console.log('xixi')
        this.code = code;
    }
    code: string;
    work(){
        super.eat();
        this.doWork();
    }
    private doWork(){
        console.log("I'm working.");
    }
}

var e1 = new Employee("name","mary");
e1.work();
```

2. 泛型
```ts
var workers: Array<Person> = [];
workers[0] = new Person("zhangsan");
workers[1] = new Employee("lisi", "2");
workers[2] = 1;   //  Type '1' is not assignable to type 'Person'.
```

3. 接口  
用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码规定。
```ts
interface IPerson{
    name: string;
    age: number;
}
class Person{
    constructor(public config: IPerson){

    }
}

var p1 = new Person({
    name: "zhangsan",
    age: 18,
});
```
```ts
interface Animal{
    eat();
}

class Sheep implements Animal{
    eat(){
        console.log("I'm eating grass.");
    }
}

class Tiger implements Animal{
    eat(){
        console.log("I'm eating meat.");
    }
}
```
4. 模块  
模块可以帮助开发者将代码分割为可重用的单元。开发者可以自己决定将模块中那些资源（类／方法／变量）暴露出去供外部使用，那些资源只在模块内使用。
```ts
// a.ts
export var prop1;
var prop2;
export function func1(){

}
function func2(){

}
export class Clazz1{

}
class Clazz2{

}

// b.ts
import { Clazz1, func1, prop1 } from './a';
console.log(prop1)
func1();
new Clazz1();

export function func3(){
    
}
```

5. 注解
注解为程序的元素（类、变量、方法）加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用的。

6. 类型定义文件（*.d.ts）
类型定义文件用来帮助开发者在Typescript中使用已有的Javascript的工具包，如jQuery.




