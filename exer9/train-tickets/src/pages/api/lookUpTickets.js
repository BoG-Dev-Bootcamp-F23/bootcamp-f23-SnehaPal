import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
  if (req.method === "GET") {
    
    try {
        
      const userId = req.query.userId;
      
      try {
        const tickets = await readTicketsByUser(userId);
        if (tickets) {
            res.status(200).json(tickets);
          } else {
            res.status(400).json("Failed");
          }
      } catch (error) {
        res.status(400).json("User Not Found");
      }
      
    } catch (error) {
      res.status(500).json("Failed");
    }
  } else {
    res.status(405).end(); 
  }
}
