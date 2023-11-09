import deleteTicket from "../../../server/mongodb/actions/deleteTicket";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    
    try {
      const ticketId = req.query.ticketId;
      try {
        const result = await deleteTicket(ticketId);
        if (result) {
            res.status(200).json("Success");
          } else {
            res.status(500).json("Failed");
          }
      } catch (error) {
        res.status(400).json("Ticket Not Found");
      }
      
    } catch (error) {
      res.status(500).json("Failed");
    }
  } else {
    res.status(405).end();
  }
}
