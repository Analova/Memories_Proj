const  mongoose  = require("mongoose")
const PostMessage =require("../models/postMessage.js")

const getPosts = async(req,res)=>{
 try{
     const postMessages=  await PostMessage.find()

     res.status(200).json(postMessages)

 }catch(error){
     res.status(404).json({message:error.message})

 }
}

const createPost = async(req,res)=>{
    const post=req.body
    const newPost=new PostMessage(post)

    try{
       await newPost.save()
       res.status(201).json(newPost)

    }catch(error){
        res.status(409).json({message:error.message})

 }
}

const updatePost = async(req,res)=>{
  const {id:_id} = req.params;
  const post=req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id")

 
  const updatedPost= await PostMessage.findByIdAndUpdate(_id,  {...post, _id} , { new: true })

  res.json(updatedPost)
}


const deletePost = async(req,res)=>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id")

 
  await PostMessage.findByIdAndRemove(id)

  res.json({message:'Post deleted successfuly'})
}

const likePost = async (req,res)=>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id")

 
 const post= await PostMessage.findById(id);
 const updatePost = await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount +1}, {new:true})

  res.json(updatePost)
}


module.exports={
    getPosts,
    createPost,
    updatePost,
    deletePost ,
    likePost
}