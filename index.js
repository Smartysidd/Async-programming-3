function placeorder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('The order of coffee is placed')
        }
        else{
            reject('The order of coffee is not placed')
        }
    })}
    function processorder(orderplaced){
        return new Promise(function(resolve){
            resolve(`${orderplaced} and served`)
        })
    }

    function generatedbill(processorder){
        return new Promise(function(resolve){
            resolve(`${processorder} and billgenerated`)
        })
    }

//promise hell code

placeorder('coffee').then(function(orderstatus){
// console.log(orderstatus)
return orderstatus
      
}).then(function(orderstatus){
    let orderisprocessed = processorder(orderstatus)
    // console.log(orderisprocessed)
return orderisprocessed
}).then(function(orderisprocessed){
    let billgenerated=generatedbill(orderisprocessed)
    return billgenerated}).then(function(billgenerated)
    {
    console.log(billgenerated)})

//using await method and async
    async function serveorder(){
//  using try and catch method
        // try {
            let orderstatus=await placeorder('coffee')
            console.log(orderstatus)
            let processorder=await orderstatus
            console.log(processorder)
            let billgenerated=await processorder
            console.log(billgenerated)
        // } catch (error) {
        //     console.log(error)
        // }
        // let orderstatus=await placeorder('coffee')
        // console.log(orderstatus)
        // let processorder=await orderstatus
        // console.log(processorder)
        // let billgenerated=await processorder
        // console.log(billgenerated)
    }
    serveorder()


    //use of type of operator//

    let c=[1,2,3,4,5,6]
    let checkedarray=Array.isArray(c)
    


   