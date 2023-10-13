function getName() {
    return new Promise ((resolve,reject)=>{
setTimeout(()=>{
    resolve("fayis")
},3000)
    })
    
}
function getMobile() {
    return new Promise ((resolve,reject)=>{
        setTimeout  (()=>{
            resolve("9876543210")
        },2000)
    })
    
}
// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result);
// })

 async function getUser(){
    let name =await getName()
    console.log("name ",name);
    let mobile= await getMobile()
    console.log(mobile);
}
getUser()