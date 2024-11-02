// we learn two types of middleware asyncHandler
//let begin
//normal arrow function is written like this 

//function name = () => {}
//the high order function are the functions which takes a function as an argument
// or return function called high-order functions.
//EXAMPLE:foreach,map,filter

//but now we are going to learn how to use async handling in the middleware


//(2)now we are using promise in the middleware//

// const asyncHandler = (requestHandler) => {
// (err,req,res,next)=>{
//     Promise.resolve(requestHandler(err,req,res,next)).catch(
//         (err) => {err.next(err)}
//     )}}


const asyncHandler = (requestHandler) =>{
(err,req,res,next)=>{
    Promise.resolve(requestHandler(err,req,res,next)).catch((err)=>{err.next(err)})
}}







//(1)we are using try and catch in the middle ware

// export {asyncHandler}


// const asyncHandler = (fn)=>  async(err,req,res,next) => {
//     try{
//         await fn(err,req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json(
//             {
//                status:false, 
//                 message:err.message}
//         )
//     }
// }



// const asyncHandler = (func) => async(err,req,res,next) => {
//     try {
//         await func((err,req,res,next))
//     } catch (error) {
//         res.status(err.code || 505).json({
//             message:error.message,
//             status:false,
//         })
//     }

// }


    