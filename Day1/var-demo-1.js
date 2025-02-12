function varDemo(){
    var x=100; //local
    console.log("x=",x);
}
//thuc thi ham
varDemo();

// su dung x tu ben ngoai ham
console.log("x=",x); //error:ReferenceError