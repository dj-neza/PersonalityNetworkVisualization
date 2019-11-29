import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';
import BarChart from '../BarChart';

const Sidebar = (props) => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
);

Sidebar.propTypes = {
  // bla: PropTypes.string,
};

Sidebar.defaultProps = {
  // bla: 'test',
};

export default Sidebar;
