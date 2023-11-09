import connectDB from "../index.js";
import Ticket from "../models/Ticket.js"
import mongoose from 'mongoose';

export default async function createTicket({ lineColor, station, userId }) {
    try {
      
      await connectDB();

      
      
      const newTicket = new Ticket({
        lineColor,
        station,
        userId,
      });  
      
      console.log(userId)

      const createdTicket = await newTicket.save();
  
      return createdTicket;
    } catch (error) {
      throw error; 
    }
  }

  