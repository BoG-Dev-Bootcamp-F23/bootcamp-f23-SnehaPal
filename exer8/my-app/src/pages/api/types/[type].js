export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const type = req.query.type;
            const URL = `https://pokeapi.co/api/v2/type/${type}/`;
            const response = await fetch(URL);

            if (!response.ok) {
                res.status(404).json({error : `No Pokémon exist for tyoe '${type}'` });
            }

            const data = await response.json();
            const pokemonList = data.pokemon.map((entry) => entry.pokemon.name);
            res.status(200).json(pokemonList);

        } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
        }

    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}