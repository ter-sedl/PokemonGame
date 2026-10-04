import BattleField from "./BattleField"
import PokemonChoices from "./PokemonChoices"
import ResultExplanation from "./ResultExplanation"
import ScoreBoard from "./ScoreBoard"
import { getPokemonG1, getTypeDamageRelations } from "../api/pokeApi"
import { useEffect, useState } from "react"
import type { Pokemon, DamageRelations, EnemyPokemon } from "../types/gameTypes"
import { getUniqueTypes, getRandomEnemy } from "../gameLogic/gameLogic"

function PokemonGame() {

  const [pokemonsArray, setPokemonsArray] = useState<Pokemon[]>([]);
  const [damageRelations, setDamageRelations] = useState<DamageRelations[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enemy, setEnemy] = useState<EnemyPokemon | null>(null);

  //zavolání api funkcí s error handlingem 
  useEffect(() => {
    async function loadData() {
      try {
        // získá pokemony první generace
        const pokeArray = await getPokemonG1();
        setPokemonsArray(pokeArray);
        //získá unikátní typy
        const uniqueTypes = getUniqueTypes(pokeArray)
        // console.log(uniqueTypes);
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

  useEffect(() => {
    if (damageRelations.length === 0 || pokemonsArray.length === 0) {
        return;
      }
      const newEnemy = getRandomEnemy(pokemonsArray, damageRelations);
      setEnemy(newEnemy!);


  }, [pokemonsArray, damageRelations]); //dát sem jen něco jako start game

  // console.log(pokemonsArray);
  // console.log(enemy);
  // console.log(damageRelations);

  // zobrazení před dokončením loadPokemons
  if (isLoading) {
    return <p>Načítám Pokémony...</p>;
  }
  // error při chybě s načtením
  if (error) {
    return <p>{error}</p>;
  }
console.log(enemy);
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