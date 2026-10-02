import BattleField from "./BattleField"
import PokemonChoices from "./PokemonChoices"
import ResultExplanation from "./ResultExplanation"
import ScoreBoard from "./ScoreBoard"
import { getPokemonG1, getTypeDamageRelations } from "../api/pokeApi"
import { useEffect, useState } from "react"
import type { Pokemon, DamageRelations } from "../types/gameTypes"
import { getUniqueTypes } from "../gameLogic/gameLogic"

function PokemonGame() {

  const [pokemonsArray, setPokemonsArray] = useState<Pokemon[] | null>([]);
  const [damageRelations, setDamageRelations] = useState<DamageRelations[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //zavolání api funkcí s error handlingem 
  useEffect(() => {
    async function loadData() {
      try {
        // získá pokemony první generace
        const pokeArray = await getPokemonG1();
        setPokemonsArray(pokeArray);
        //získá unikátní typy
        const uniqueTypes = getUniqueTypes(pokeArray)
        //získá double_damage_from ke všem typům
        const relations = await getTypeDamageRelations(uniqueTypes);
        setDamageRelations(relations);
      } catch { // když se to pokazí
        setError("Nepodařilo se načíst Pokémony.");
      } finally { //když se podaří i nepodaří
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  console.log(pokemonsArray);
  console.log(damageRelations);

  // zobrazení před dokončením loadPokemons
  if (isLoading) {
    return <p>Načítám Pokémony...</p>;
  }
  // error při chybě s načtením
  if (error) {
    return <p>{error}</p>;
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