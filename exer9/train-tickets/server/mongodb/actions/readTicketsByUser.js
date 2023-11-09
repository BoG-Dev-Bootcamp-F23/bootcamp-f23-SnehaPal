import connectDB from "../index";
import Ticket from "../models/Ticket.js";

export default async function readTicketByUser(userId) {
  try {
    await connectDB();
    const tickets = await Ticket.find({ userId });
    return tickets;
  } catch (error) {
    throw error; 
  }
}
