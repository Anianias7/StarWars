import React from "react";
import { GET_FILMS_QUERY } from "../../graphql/queries/Films";
import { useQuery } from "@apollo/client";
import { GetFilmsQuery } from "../../generated/graphql";

const Main = () => {
  const { loading, error, data } = useQuery<GetFilmsQuery>(GET_FILMS_QUERY);
  console.log(data);
  return (
    <div>
      <p>tekst</p>
    </div>
  );
};

export default Main;
