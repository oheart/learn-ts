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