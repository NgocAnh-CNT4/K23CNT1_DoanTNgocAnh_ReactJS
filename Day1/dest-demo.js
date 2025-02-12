//array
var arr =[10,20,25,15];
//destructuring:
var [a,b]=arr; // =>a=10, b=20
console.log("a=",a);
console.log("b=",b);

[a,b,c]=arr;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//oject
const student={
    name:"Ngoc Anh",
    age:20,
    phone:"123456789",
    emali:"doan8040@gmail.com"
    }

    var {name,phone} =student;
    //=> name:"Ngoc Anh"; phone:"123456789"
    console.log("name:",name);
    console.log("phone:",phone);

    //chat Gpt
    //dest demo