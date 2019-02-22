import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styled from 'styled-components';

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map(tab => 
          <Tab
            tab={tab}
            selectedTab={selectedTab}
            selectTabHandler={selectTabHandler}
            key={uuid()}
          />
        )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}