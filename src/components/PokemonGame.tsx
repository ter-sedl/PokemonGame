import BattleField from "./BattleField"
import PokemonChoices from "./PokemonChoices"
import ResultExplanation from "./ResultExplanation"
import ScoreBoard from "./ScoreBoard"

function PokemonGame() {
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