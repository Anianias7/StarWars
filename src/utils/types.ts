export type CustomFilm = {
  film: {
    id: number;
    episodeID: number;
    title: string;
    plannetConnection: {
      planets: [
        {
          id: number;
          name: string;
          rotationPeriod: number;
          orbitalPeriod: number;
          diameter: number;
          climates: string;
          surfaceWater: number;
          population: number;
        },
      ];
    };
  };
};
