import { gql } from "@apollo/client";

export const GET_FILMS_QUERY = gql`
  query getFilms {
    allFilms {
      films {
        id
        title
      }
    }
  }
`;
