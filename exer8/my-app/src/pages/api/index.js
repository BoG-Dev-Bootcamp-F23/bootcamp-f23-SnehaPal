export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const num = Math.floor(Math.random() * 1000) + 1;            ;
            const URL = `https://pokeapi.co/api/v2/pokemon/${num}/`;
            const response = await fetch(URL);

            if (!response.ok) {
                res.status(404).json({error : `Pokémon at num '${num}' not found` });
            }

            const data = await response.json();

            const types = data.types.map((typeEntry) => typeEntry.type.name);
      
            const pokemonInfo = {
                name: data.name,
                sprite: data.sprites.front_default,
                type: types,
            };

            res.status(200).json(pokemonInfo);

        } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
        }

    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}