import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";
import deleteTicket from "../../../server/mongodb/actions/deleteTicket";
import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    try {
      const { ticketId, userId } = req.body;
        
      try {
        const tickets = await readTicketsByUser(userId);
      } catch (error) {
        res.status(400).json("User Not Found");
      }

      const result = await updateTicketByUser(ticketId, userId);
      console.log(result)
      if (result) {
        res.status(200).json("Success");
      } else {
        res.status(500).json("Failed");
      }
    } catch (error) {
      res.status(500).json("Ticket Not Found");
    }
  } else {
    res.status(405).end();
  }
}
