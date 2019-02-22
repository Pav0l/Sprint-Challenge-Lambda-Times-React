import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styled from 'styled-components';

const Cards = ({ cards }) => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
     { 
        cards.map(card =>
        <Card
          card={card}
          key={uuid()}        
        />
        )
      }
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
