export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { pokemon1, pokemon2 } = req.body;

      if (!pokemon1 || !pokemon2) {
        return res.status(400).json({ error: "Both 'pokemon1' and 'pokemon2' names are required in the request body" });
      }

      let pokemon1Data, pokemon2Data;

      const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}/`);
      try {
        pokemon1Data = await response1.json();
      } catch (e) {
        return res.status(400).json({ error: "Pokémon1 does not exist" });
      }

      const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}/`);
      try {
        pokemon2Data = await response2.json();
      } catch (e) {
        return res.status(400).json({ error: "Pokémon2 does not exist" });
      }

      const baseStat1 = pokemon1Data.stats[0].base_stat;
      const baseStat2 = pokemon2Data.stats[0].base_stat;
      
      if (baseStat1 > baseStat2) {
        return res.status(200).json({ "winner" : pokemon1Data.name });
        } else if (baseStat2 > baseStat1) {
            return res.status(200).json({ "winner" : pokemon2Data.name });
        } else {
            return res.status(200).json({ "winner" : "It's a tie!" });;
        }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

