import React from 'react';
import { Component } from 'react';
import styles from './footerAboutMe.module.scss';

class Container extends Component { // 이름을 Container로 변경
    render() {
        return (
            <div className={styles.footerAboutMe}>
                <div className={styles.portfolioBox}>
                <p className={styles.bigText}>
                 자세한 포트폴리오는 <a href="https://github.com/Birdust" target="_blank" rel="noopener noreferrer" className={styles.link}> 여기</a> 에 있습니다!
                </p>             
                </div>
            </div>
        );
    }
};

export default Container;