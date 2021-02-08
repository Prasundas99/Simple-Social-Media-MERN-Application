import PostMessage from '../models/postMessage.js';



export  const getPosts = async (req,res)=>{
    try {
        const postmessage = await PostMessage.find();

        res.status(200).json(postmessage);
        
    } catch (error) {
        res.status(404).json({ message: error});
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    // console.log(req.body);
    const newPost = new PostMessage(post);
  
    try {
      await newPost.save();
  
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };