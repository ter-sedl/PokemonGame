export type PokemonSpecies = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  types: string[];
  image: string;
};

export type EnemyPokemon = {
  name: string;
  types: string[];
  image: string;
  defeatedBy: string[],
};

export type PokeType = {
  slot: number;
  type: { name: string; url: string };
};

export type DamageRelations = {
  type: string;
  doubleDamageFrom: string[];
};

export type CardType = {
  name: string;
  types: string[];
  image: string;
  isWinner: boolean;
}

export type CardProps = {
  name: string;
  types: string[];
  image: string;
  isWinner?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  size?: "normal" | "large";
  dragabble?: boolean;
};

export type PokemonChoicesProps = {
  options: CardType[];
  onDragStart: (pokemon: CardType) => void;
  onDragEnd?: () => void;
};

export type BattleFieldProps = {
  enemy: EnemyPokemon | null;
  selectedPokemon: CardType | null;
  onDrop: () => void;
  dragging: CardType;
};