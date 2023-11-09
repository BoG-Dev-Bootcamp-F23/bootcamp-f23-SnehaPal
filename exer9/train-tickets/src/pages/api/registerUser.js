import createUser from "../../../server/mongodb/actions/createUser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, age } = req.body;

    try {
      const createdUser = await createUser(name, age);
      res.status(200).json("Success");
    } catch (error) {
      res.status(500).json("Failed");
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
