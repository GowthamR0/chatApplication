const mongoose=require('mongoose')
const DbConnection=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/userInformation')
    }
    catch(err){
        return err
    }
}
module.exports=DbConnection