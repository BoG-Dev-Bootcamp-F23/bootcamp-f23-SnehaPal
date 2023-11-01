export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        const name = req.query.name;
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        const response = await fetch(URL);
  
        if (!response.ok) {
          res.status(404).json({ error: `Pokémon with name '${name}' not found` });
          return;
        }
  
        const data = await response.json();
  
        if (data.species && data.species.url) {
          const speciesResponse = await fetch(data.species.url);
          if (!speciesResponse.ok) {
            res.status(404).json({ error: "Evolution data not found" });
            return;
          }
  
          const speciesData = await speciesResponse.json();
          const evolutionChainURL = speciesData.evolution_chain.url;
  
          const evolutionChainResponse = await fetch(evolutionChainURL);
          if (!evolutionChainResponse.ok) {
            res.status(404).json({ error: "Evolution chain not found" });
            return;
          }
  
          const evolutionChainData = await evolutionChainResponse.json();
          const nextEvolution = getNextEvolution(evolutionChainData, name);
          res.status(200).json(nextEvolution);
        } else {
          res.status(404).json({ error: "Evolution data not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  
  function getNextEvolution(evolutionChainData, name) {
    if (!evolutionChainData || !evolutionChainData.chain) {
      return { error: "Evolution chain data is invalid" };
    }
  
    const chain = evolutionChainData.chain;
  
    let currentPokemon = chain;
    let nextEvolution = null;
  
    while (currentPokemon) {
      if (currentPokemon.species && currentPokemon.species.name === name) {
        nextEvolution = currentPokemon.evolves_to[0];
        break;
      }
      currentPokemon = currentPokemon.evolves_to[0];
    }
  
    if (nextEvolution) {
      return { nextEvolution: nextEvolution.species.name };
    } else {
      return { currentStage: name };
    }
  }
  