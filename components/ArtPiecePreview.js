import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

const ArtPiecePreview = ({ data }) => {
  return (
    <ArtPieceWrapper key={data.slug}>
      <p>{data.name}</p>
      <p>{data.artist}</p>
      <Image src={data.imageSource} width={100} height={100} alt={data.name} />
      <Link href={`/art-pieces/${data.slug}`}>To details...</Link>
    </ArtPieceWrapper>
  );
};

export default ArtPiecePreview;

const ArtPieceWrapper = styled.div`
  border: 1px solid black;
  margin: 1rem;
`;
