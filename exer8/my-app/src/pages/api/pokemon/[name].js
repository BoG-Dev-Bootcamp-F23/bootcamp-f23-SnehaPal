export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const name = req.query.name;
            const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
            const response = await fetch(URL);

            if (!response.ok) {
                res.status(404).json({error : `Pokémon with name '${name}' not found` });
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