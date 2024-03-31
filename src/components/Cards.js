import React from 'react';

const Cards = ({ cardsData, CardTitle }) => {
  const numCards = cardsData.length;
  const numColumns = 3; // Assuming fixed 3 columns layout

  return (
    <div className="common my-cards default_spacing">
      <h2 className="section-title text-center p-4 primary-gradient">{CardTitle}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {cardsData.map((card, index) => (
          <div key={index} className={`col ${isLastCardInLastRow(index, numCards, numColumns) ? 'd-flex justify-content-center' : ''}`}>
            <div className="card text-center">
              <img
                src={card.image}
                className="card-img-top border-bottom img-fluid"
                alt={card.title}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to check if the card is the last card in the last row
const isLastCardInLastRow = (index, numCards, numColumns) => {
  const numRows = Math.ceil(numCards / numColumns);
  const lastRowStartIndex = (numRows - 1) * numColumns;
  return index >= lastRowStartIndex && index < numCards;
};

export default Cards;
