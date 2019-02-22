import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default function Content(props) {

  const [selected, setSelected] = useState('all');
  const [tabs, setTabs] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTabs(tabData);
    setCards(cardData);
  }, []);

  const changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    setSelected(tab);
    // tab === 'all' ? setCards(cardData) : setCards(cardData.filter(card => card.tab === selected))
  };

  const filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    if(selected === 'all') {
      setCards(cardData);
    } else {
      const filteredCards = cardData.filter(card => card.tab === selected);
      setCards(filteredCards);
    }
  };

  useEffect(() => {
    filterCards();
  }, [selected]);

  return (
    <ContentContainer>
      {/* 
        Add 2 props to the Tabs component, 
        `selectedTab` that includes the currently selected tab
        and `selectTabHandler` that includes the function to change the selected tab
      */}
      <Tabs
        tabs={tabs}
        selectedTab={selected}
        selectTabHandler={changeSelected}
      />
      <Cards cards={cards} />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;
