import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = () => (
  <header className={classNames("container", styles.header)}>
    <h1 className ="shimmer">Top 100 Movies</h1>
  </header>
)

export default Header;
