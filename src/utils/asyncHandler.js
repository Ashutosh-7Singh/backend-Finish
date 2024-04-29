const  asynchHandler=(requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}


export { asynchHandler };

// const asynchHandle=()=>{}
// const asynchHandle=(func)=>()=>{}
// const asynchHandle=(func)=> async ()=>{}

// const asynchHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message,
//     });
//   }
// };
