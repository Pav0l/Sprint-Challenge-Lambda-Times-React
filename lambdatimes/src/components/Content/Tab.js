import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
  const styleSelector = tab === selectedTab ? 'active-tab' : 'tab';
  
  return (
    <div
      className={styleSelector}
      onClick={() => {
        selectTabHandler(tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {tab.toUpperCase()}
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