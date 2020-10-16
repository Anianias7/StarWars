export const getPlanetDetailValue = <T>(planetDetail: T): T | string => {
  return planetDetail ? planetDetail : 'unknown';
};
