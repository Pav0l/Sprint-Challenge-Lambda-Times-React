import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
  // const styleSelector = tab === selectedTab ? 'active-tab' : 'tab';
  
  return (
    <div>
    {
      tab === selectedTab
      ? 
      <ActiveTab onClick={() => selectTabHandler(tab)}>
      {tab.toUpperCase()}
      </ActiveTab>
      :
      <StyledTab onClick={() => selectTabHandler(tab)}>
      {tab.toUpperCase()}
      </StyledTab>

    }
    </div>

  
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;

const ActiveTab = styled.div`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;
