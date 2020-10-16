export const filmTitleValidation = (value: string) => {
  if (value.length && value[0] != value[0].toUpperCase()) {
    return 'Movie tittle name must start with a capital letter.';
  } else if (value.length < 3) {
    return 'Movie title must be at least three letters long.';
  }
  return null;
};
