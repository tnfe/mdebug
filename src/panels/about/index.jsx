import React, { PureComponent } from 'react';
import styles from './about.module.css';

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.mdebugAbout}>
        <h3>Mdebug by Tencent News TNT Web Team</h3>
        <p>
          author: <a href="https://github.com/ihtml5">云峰</a>
        </p>
        <p>version: 2.0.1</p>
      </div>
    );
  }
}

export default About;
