const PostMessage =require("../models/postMessage.js")

const getPosts = async(req,res)=>{
 try{
     const postMessages=  await PostMessage.find()

     res.status(200).json(postMessages)

 }catch(error){
     res.status(404).json({message:error.message})

 }
}

const createPost = (req,res)=>{
 try{

 }catch(error){

 }
}



module.exports={
    getPosts,
    createPost
}