import React from "react";
// import { useLoaderData } from "react-router-dom";

function RecipeCard() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div>
        {RecipeCard.map((recip) => (
          <RecipeCard key={recip.id} recip={recip} />
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
