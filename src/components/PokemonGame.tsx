import BattleField from "./BattleField"
import PokemonChoices from "./PokemonChoices"
import ResultExplanation from "./ResultExplanation"
import ScoreBoard from "./ScoreBoard"
import { getPokemonG1 } from "../api/pokeApi"
import { useEffect, useState } from "react"
import type { Pokemon } from "../types/gameTypes"

function PokemonGame() {

  const [pokemonsArray, setPokemonsArray] = useState<Pokemon[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //připravení array všech pokemonl první generace s error handlingem 
  useEffect(() => {
    async function loadPokemons() {
      try {
        const pokeArray = await getPokemonG1();
        setPokemonsArray(pokeArray);

      } catch { // když se to pokazí
        setError("Nepodařilo se načíst Pokémony.");
      } finally { //když se podaří i nepodaří
        setIsLoading(false);
      }
    }

    loadPokemons();
  }, []);

// zobrazení před dokončením loadPokemons
  if (isLoading) {
    return <p>Načítám Pokémony...</p>;
  }
// error při chybě s načtením
  if (error) {
    return <p>{error}</p>;
  }


  console.log(pokemonsArray);

if (pokemonsArray) {
  const uniqueTypes = [
    ...new Set(
      pokemonsArray!.flatMap((pokemon) => pokemon.types)
    ),
  ];  
  console.log(uniqueTypes);
}
  
return (
  < >
    <h1>Pokemon type battle</h1>
    <ScoreBoard />
    <BattleField />
    <h3>Vyber pokemona, který porazí nepřítele</h3>
    <PokemonChoices />
    <ResultExplanation />
  </>
)
}
export default PokemonGame