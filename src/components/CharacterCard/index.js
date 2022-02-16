import styled from "styled-components";

const Card = styled.div`
  border: solid 1px #3cb64a;
  width: 400px;
`;

const Title = styled.h2`
  color: red;
`;

const Image = styled.img``;

export default function CharacterCard({ character }) {
  return (
    <Card key={character.id}>
      <Image src={character.image} alt={`${character.name} character`} />
      <Title>{character.name}</Title>
    </Card>
  );
}
