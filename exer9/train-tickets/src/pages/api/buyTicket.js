import createTicket from "../../../server/mongodb/actions/createTicket";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { lineColor, station, userId } = req.body;

      
      const result = await createTicket({ lineColor, station, userId });

      if (result) {
        res.status(200).json("Success");
      } else {
        res.status(500).json("Failed");
      }
    } catch (error) {
      res.status(500).json("Failed");
    }
  } else {
    res.status(405).end(); 
  }
}
