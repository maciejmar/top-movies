import React from 'react';
import classNames from 'classnames';
import styles from './Loader.module.scss';
import movies from '../../assets/images/movies.png';

const Loader = () => (
  <div className={styles.loader}>
    <img className={classNames(styles.note, styles.down)} alt="" src={movies} />
    <img className={classNames(styles.note, styles.up)} alt="" src={movies} />
    <img className={classNames(styles.note, styles.down)} alt="" src={movies} />
  </div>
)

export default Loader;
