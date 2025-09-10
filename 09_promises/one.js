const promiseexample1 = new Promise(function(resolve,reject){// this is how we create the promises in the js let us consider this example as the first one

setTimeout(function(){
    console.log("Async opertion");
    resolve();
},5000)




})
promiseexample1.then(function(){
console.log("Here is the async operation");
})

// this is the another method how we use the promises with out decalring with out the variable in the js and this is how we create and conside this as the second method for promises
new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("This is the another method of the promises");
        reslove();
        
    
},2000)
})

.then(function(){

    console.log("Hello Bhai");
    

});


// this is how we use the paramerters in the resolve this is also one of the model in the using of the promises and this is the third method how we use the promises
 // it is used in process of the data consumption in a database means reading and using the information that's already stored there
const promiseexample3 = new Promise(function(resolve,reject){
setTimeout(function(){
resolve({name:"shouqatAzeez",age:"21",village:"Pedapudi"})},1000)
})
promiseexample3.then(function(para){
    console.log(para);
    
})


// this is how we use the 2 then in  the code 
const promiseexample4 = new Promise(function(resolve,reject){
    setTimeout(function(){
       let errormsg = false;
       if(!errormsg){
        resolve({username:"shouqat Azeez",age:21})

       }
       else reject('error founded solve it ')
    },3000)


    })

    promiseexample4.then(function(user){// here we decalre the user as the parameter 

   
        console.log(user);
    return user.username }
        
    ).then((myusername) => {// this then can extract the data so that it can find username from the above up then

console.log(myusername);



    }).catch((error) =>{
        console.log(error);
        
    })

    .finally(function (){
        console.log(
"the code as done or worked successfully"        
        );
        
    })



    fetch('https://jsonplaceholder.typicode.com/users')// these is how we use the then and catch i mean for the fetch the data 
    .then(function(response){

        return response.json()

    })
    .then(function(data){
console.log(data);

    })
    .catch((error)=>{
console.log(error);

    })