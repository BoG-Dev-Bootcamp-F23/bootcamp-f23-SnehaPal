import connectDB from "../index";
import Ticket from "../models/Ticket.js";

export default async function deleteTicket(ticketId) {
  try {
    await connectDB();
    // console.log(ticketId)
    const deletedTicket = await Ticket.findByIdAndDelete(ticketId);
    // console.log(deletedTicket)
    if (deletedTicket) {
      return true; 
    } else {
      return false;
    }
  } catch (error) {
    throw error; 
  }
}
