// const asyncHandler = ()=>{

// }

// use asyncHandler with Promise

const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}


// make higher order fn 
// const asyncHandler => (fn) =>{  async(req,res,next){}}
// const asyncHandler => (fn) =>  async(req,res,next){}

// const asyncHandler = (fn)=> async(req,res,next)=>
//     {
        
//         try{
//             await fn(req,res,next)
            
//         }
//         catch(err){
//             res.status(err.code || 500).json({
//                 success:false,
//                 message:err.message
//             })
            
//         }
        
//     }



