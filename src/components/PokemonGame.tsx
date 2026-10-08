import BattleField from "./BattleField"
import PokemonChoices from "./PokemonChoices"
import ResultExplanation from "./ResultExplanation"
import ScoreBoard from "./ScoreBoard"
import { getPokemonG1, getTypeDamageRelations } from "../api/pokeApi"
import { useEffect, useRef, useState, useReducer } from "react"
import type { Pokemon, DamageRelations, EnemyPokemon, CardType } from "../types/gameTypes"
import { getUniqueTypes, getRandomEnemy, getPokemonCards } from "../gameLogic/gameLogic"
import { gameReducer } from "../game/gameReducer"

function PokemonGame() {

  const [pokemonsArray, setPokemonsArray] = useState<Pokemon[]>([]);
  const [damageRelations, setDamageRelations] = useState<DamageRelations[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  const [gameState, dispatch] = useReducer(
    gameReducer,
    {
      enemy: null,
      cardSelect: null,
    }
  );

  const gameInitialized = useRef(false);


  function prepareGame() {
    const newEnemy: EnemyPokemon = getRandomEnemy(pokemonsArray, damageRelations);
    const newCards = getPokemonCards(pokemonsArray, newEnemy);
    dispatch({ 
      type: "PREPARE_GAME",
      enemy: newEnemy,
      cards: newCards, // action cards zmněná cardSelect v reduceru
    });
  };


  //zavolání api funkcí s error handlingem 
  useEffect(() => {
    async function loadData() {
      try {
        const pokeArray = await getPokemonG1(); // získá pokemony první generace
        setPokemonsArray(pokeArray);

        const uniqueTypes = getUniqueTypes(pokeArray) //získá unikátní typy

        const relations = await getTypeDamageRelations(uniqueTypes); //získá double_damage_from ke všem typům
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
    if (
      damageRelations.length === 0 ||
      pokemonsArray.length === 0 ||
      gameInitialized.current
    ) {
      return;
    }
    gameInitialized.current = true;
    prepareGame();
  }, [pokemonsArray, damageRelations]); //použiju jen na začátku hry, pak už budu volat prepare game jinde


  if (isLoading) {  // zobrazení před dokončením loadPokemons
    return <p>Načítám Pokémony...</p>;
  }

  if (error) {  // error při chybě s načtením
    return <p>{error}</p>;
  }
  console.log(gameState.enemy);
  console.log(gameState.cardSelect);
  if (gameState.enemy === null) {
    return
  }

  return (
    < >
      <h1>Pokemon type battle</h1>
      <ScoreBoard />
      <BattleField enemy={gameState.enemy} />
      <h3>Vyber pokemona, který porazí nepřítele</h3>
      {/* vyhnout se null v cardSelect */}
      {gameState.cardSelect && <PokemonChoices options={gameState.cardSelect} />}
      <ResultExplanation />
    </>
  )
}
export default PokemonGame