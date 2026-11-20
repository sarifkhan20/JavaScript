//prototypes

// const employee ={
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// };
// const karanArjun = {
//     salary:50000,
//     calctax(){
//         console.log("tax rate is 20%");
//     },
// }
// karanArjun.__proto__=employee;


//prototypes


//classes
// class Car{
//     constructor(brand,milage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.milage=milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let  fortuner = new Car("fortuner",10);
// console.log(fortuner);
// let nexus = new Car("nexus",15);
// console.log(nexus);

//class


//inheritance
// class Person{
//     constructor(name){
//         this.name=name;
//         this.specie="homosepians";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engg extends Person {
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat()
//         console.log("solve problem")
//     }    
// }
// let engg = new Engg("sarif");

// inhertance

//practice

// let DATA = "secret data";
// class User{
//     constructor(name,email){
//         this.anme=name;
//         this.email=email;
//     }
//     veiwdata(){
//         console.log("data= ",DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata(){
//         DATA="edited data";
//     }
// }
// let stu1 = new User("sarif","xyz.com");
// let stu2 = new User("khan","abc.com");

// let admin = new Admin("admin","admin.com");

//practice


//error handling(try-catch)
let a=2;
let b=7;
console.log("a:",a);
console.log("b:",b);
console.log("a+b:",a+b);
console.log("a-b:",a-b);
try{
    console.log("a+b:",a+c);
}
catch(err){
    console.log(err);
}
console.log("a+b:",a+b);
console.log("a-b:",a-b);
console.log("a+b:",a+b);