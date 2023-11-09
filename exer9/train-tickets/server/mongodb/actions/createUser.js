import connectDB from "../index.js";
import User from "../models/User.js"

export default async function createUser(name, age) {
    try {
      
      await connectDB();
  
      
      const newUser = new User({
        name,
        age,
      });
  
      
      const createdUser = await newUser.save();
  
      return createdUser;
    } catch (error) {
      throw error; 
    }
  }
  