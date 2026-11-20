// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,4000);


// console.log("one");
// setTimeout(() => {
//     console.log("hello");
// },4000);
// console.log("two");

// function getData(dataID/*,getNextData*/){
//     return new Promise((resolve,reject)=>{
//         setTimeout( ()=>{
//             console.log("data:",dataID);
//             /*if(getNextData){
//                 getNextData();
//             }*/
//            resolve("success");
//         },3000);
//     });
// }

//promise chain
// getData(1)
//     .then((res)=>{
//         console.log("getting data2");
//         return getData(2);
//     })
//     .then((res) =>{
//         console.log("getting data3");
//         return getData(3);
//     })
//     .then((res) =>{
//         console.log("getting data4");
//         return getData(4);
//     })
//     .then((res) =>{
//         console.log(res);
// });


//callBack Hell Problem occcured!!
// getData(1, ()=>{
//     console.log("getting data2");
//     getData(2, ()=>{
//         console.log("getting data3");
//         getData(3, ()=>{
//             console.log("getting data4")
//             getData(4, ()=>{
//                 console.log("getting data5");
//                 getData(5);
//             });
//         });
//     });
// });



//promise

// function asyncFunction1 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFunction2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetching data1.....");
// asyncFunction1().then((res)=>{
//     console.log("fetching data2.....");
//     asyncFunction2().then((res)=>{
//     console.log(res);
//     });
// });

// const getPromise = () =>{
//     return new Promise((resolve,reject) => {
//         console.log("i am a promise");
//         resolve("sucess:");
//     });
// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled!!",res); 
// });
// promise.catch((error)=>{
//     console.log("rejected",error);
// })


// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise");
//     resolve(123); // reject("error occured!!")
// })
// function getData(dataID,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout( ()=>{
//         console.log("data:",dataID);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
//     });
// }


// async-await
// async function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("whether data!!");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWheatherData(){
//     await api(); //1st Call
//     await api(); //2nd call)
// }

function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            console.log("data:",dataID);
            resolve("success");
        },3000);
    });
}

// async function gettingData(){
//     await getData(1);
//     console.log("getting data2");
//     await getData(2);
//     console.log("getting data3");
//     await getData(3);
//     console.log("getting data4");
//     await getData(4);
// }
// gettingData();


//reducing the extra function call usinf IIFE
(async function (){
    await getData(1);
    console.log("getting data2");
    await getData(2);
    console.log("getting data3");
    await getData(3);
    console.log("getting data4");
    await getData(4);
})();
