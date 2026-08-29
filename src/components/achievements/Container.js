import { Component } from 'react';
import Subject from '../Subject';
import styles from '../../styles.module.scss';

class Container extends Component {
    render() {
        const subject = this.props.contents.subject;
        const contents = this.props.contents.contents;
        const cards = contents.map((card, index) => (
            <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementMetric}>{card.metric}</div>
                <div className={styles.achievementTitle}>{card.title}</div>
                <div className={styles.achievementDesc}>{card.desc}</div>
            </div>
        ));

        return (
            <div className={styles.Container}>
                <Subject subject={subject}></Subject>
                <div className={styles.Achievements}>{cards}</div>
            </div>
        );
    }
}

export default Container;
