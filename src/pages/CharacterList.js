import { useEffect, useState } from "react";
import styled from "styled-components";
import { CharacterCard } from "../components";
import { getCharactersList } from "../services/character";

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 20px 0;
  text-align: center;
`;

export default function CharacterList() {
  const [data, setData] = useState({ info: {}, results: [] });

  async function fetchData() {
    setData(await getCharactersList());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Title>Character List</Title> */}
      <List>
        {data.results.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </List>
    </>
  );
}
