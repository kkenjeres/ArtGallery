import Spotlight from "@/components/Spotlight";
import { useMemo } from "react";

export default function SpotlightPage({
  data,
  checkIsFavorite,
  onToggleFavorite,
}) {
  const spotlightPiece = useMemo(() => {
    if (!data) return;

    return data[Math.floor(Math.random() * data.length)];
  }, [data]);

  return (
    <Spotlight
      spotlightPiece={spotlightPiece}
      onToggleFavorite={onToggleFavorite}
      checkIsFavorite={checkIsFavorite}
    />
  );
}
