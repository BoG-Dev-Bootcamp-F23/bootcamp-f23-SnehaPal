import connectDB from "../index";
import Ticket from "../models/Ticket.js";

export default async function updateTicketByUser(ticketId, userId) {
    try {
      await connectDB();
      console.log(ticketId)
      console.log(userId)
      const updatedTicket = await Ticket.findOneAndUpdate(
        { _id: ticketId },
        { userId },
      );
      
      console.log(updatedTicket)
  
      if (updatedTicket) {
        // console.log("Ticket updated successfully:", updatedTicket);
        return true;
      } else {
        // console.log("Ticket not found or not updated");
        return false;
      }
    } catch (error) {
    //   console.error("Error updating ticket:", error);
      throw error;
    }
  }
  