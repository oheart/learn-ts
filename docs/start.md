## 类型注解
```ts
function greeter(person: string){  // string类型注解
    return "Hello, " + person;
}

let user = 'Mary';
document.body.innerHTML = greeter(user);
```

## 接口
```ts
interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User"}
document.body.innerHTML = greeter(user);
```

## 类
Typescript里的类只是Javascript里常用的基于原型面向对象编程的简写。
```ts
class Student{
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " "  + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
```