
// callback function examples
// ***************************

// function add (num1,num2,callback) {
//     let err = false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)    
// }
// function multiply (num1,num2,callback){
//     callback ( num1*num2)
// }
// function division (num1,num2,callback){
//     callback ( num1 / num2)
// }


// add(30,20,(sum,err)=>{
//     if(err){
//         console.log("a number is zero");
//     }
// else{
//     console.log(sum);
//     multiply(sum,sum,(product)=>{
//         console.log(product);
//         division(product,10,(result)=>{
//             console.log(result);
//         })
//     })
    
// }
// })

// promise examples
// *****************

// const Promise =require('Promise')

function add(num1,num2) {
    return new Promise((resolve,reject)=>{
       if(num1== 0){
        reject("1st number is zero")
       }
       
        resolve(num1+num2)
    })
    
}
function multiply(num1,num2) {
    return new Promise((resolve,reject)=>{
       if(num1==0){
        reject("1st number is zero")
       }
       
        resolve(num1 * num2)
    })
    
}

function division (num1,num2){
    return new Promise ((resolve,reject)=>{
        if (num1==0){
            reject ("1st num is zero")
        }
        resolve(num1/num2)
    })
}
function again_add (num1,num2){
    return new Promise ((resolve,reject)=>{
        if (num1==0){
            reject ("1st num is zero")
        }
        resolve(num1 + num2)
    })
}

add(20,20).then((sum)=>{
    console.log(sum)
    return multiply (sum,sum)
}).then ((product)=>{
    console.log(product);
    return division(product,10)
}).then((result)=>{
    console.log(result);
    return again_add(result,50)

}).then((adding)=>{
    console.log(adding);
}).catch ((err)=>{
    console.log(err);
})