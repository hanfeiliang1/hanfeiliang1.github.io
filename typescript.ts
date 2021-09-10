console.log("reach here")
let hello = "hello"; //let varibale = value

const usser = { //const: create object
    name: "a",
    id:1,
};

interface User{ //interface: create object type, size, 
    name: string; //string != String
    id: number;
}

const a: User={ //create object with defined object type
    name: "a",
    id: 2,
}

class UserAccount{ 
    name: string;
    id: number;
    
    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}
// comment
const b: User = new UserAccount("check",2); //use constructor to craete object variable

function getUser(){ //
    return a;
}

type myBool = true | number;  //type: create a data type
// a variable of boolean, either be true or false,

type States = "a"| "b" | "c";

function getLength(obj: string | string[]) {
    return obj.length;
  }

interface Bag<Type> { // => : retrun
    add:(obj:Type) => void;
    get:() =>Type;
}

declare const backpack: Bag<string>;  //make type to string list, declare?

const jfk = backpack.get(); // value of jfk is Type

backpack.add("a");

//strucutral type system
function userReport( pvg: User){ //output to console
    console.log('${pvg.name},${pvg.number}')
}

const ewr = {name:"a", id:1};
userReport(ewr);
const sfc = new UserAccount("a",1);
userReport(sfc);