import { Component } from 'react';
import styles from '../../styles.module.scss';
import intro from './intro.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;
        const paragraphs = content.intro.split("\n\n").map((line, index) => <p key={index}>{line}<br /></p>);

        return (
            <div className={styles.Right}>
                {content.headline && <h3 className={intro.headline}>{content.headline}</h3>}
                {paragraphs}
            </div>
        );
    }
}

export default Right;