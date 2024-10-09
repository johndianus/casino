import Image, { StaticImageData } from 'next/image';
import { GamesProps, Game } from '@/app/models/game';
import { useState } from 'react';
import errorImage from '@/app/assets/error.png';

const GameComponent: React.FC<GamesProps> = ({ games }) => {
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,_200px)]">
      {games?.map((game: Game) => {
        const [imgSrc, setImgSrc] = useState<string | StaticImageData>(game.icon_2);

        return (
          <div
            className="flex flex-col items-center m-1 text-center w-full max-w-[200px]"
            data-testid={`game-${game.id}`}
            key={game.id}
          >
            <Image
              src={imgSrc}
              width={200}
              height={200}
              alt={game.name}
              className="object-cover rounded-md block w-full"
              onError={() => setImgSrc(errorImage)}
            />
            <div className="text-black text-xs font-bold mt-2 max-w-full">
              {game.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameComponent;
