import User from "../models/userModel.js"
import uploadOnCloudinary from './../config/cloudinary.js';
export const getCurrentUser = async (req, res)=>{
    try {
        const userId = req.userId
        const user = await User.findById(userId).select("-password")
        if(!user){
            return res.json({message: "user not found"})
        }
           return res.json(user)
    } catch (error) {
           return res.json({message: "get current user error"})
    }
}


export const updateAssistant = async (req, res)=>{
    try {
        const {assistantName, imageUrl} = req.body
        let assistantImage;
        if (req.file) {
            assistantImage = await uploadOnCloudinary (req.file.path)
        }
        else{
            assistantImage = imageUrl;
        }

        const user = await User.findByIdAndUpdate(
            req.userId,
            {assistantName, assistantImage},
            {new:true}
            ).select("-password");
            return res.status(200).json(user)
    } catch (error) {
         return res.json({message: "Update assistant error"})
    
    }
}