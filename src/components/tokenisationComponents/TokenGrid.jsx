import React from 'react';
import { TokenTile } from './TokenTile';

export const TokenGrid = ({ tokens, type, onTileClick }) => {
  if (!tokens || tokens.length === 0) {
    return <p className="text-center py-8">No {type} tokens available at the moment.</p>;
  }

  return (
    <div className="flex flex-nowrap gap-6 mt-6 w-full sm:w-auto">
      {tokens.map((token) => (
        <TokenTile 
          key={token.id}
          projectName={token.projectName}
          companyName={token.companyName}
          logo={token.logo}
          currentPrice={token.currentPrice}
          priceChange={token.priceChange}
          currencySymbol={token.currencySymbol}
          onClick={() => onTileClick(token)} // Ensure this is passed correctly

        />
      ))}
    </div>
  );
};
