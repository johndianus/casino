export type Game = {
    id: string;
    name: string;
    icon_2: string;
  };

  export type GamesProps = {
    games: Game[];
  };

  export type searchValueProps = {
    searchValue: string
    setSearchValue: (a: string) => void;
  }