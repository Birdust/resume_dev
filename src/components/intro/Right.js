import { Component } from 'react';
import styles from '../../styles.module.scss';
import intro from './intro.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;
        const paragraphs = content.intro
            .split(/\n[ \t]*\n/)
            .map((block) => block.trim())
            .filter((block) => block.length)
            .map((block, index) => {
                const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
                return (
                    <p key={index} className={intro.paragraph}>
                        {lines.map((line, j) => (
                            <span key={j}>{line}{j < lines.length - 1 && <br />}</span>
                        ))}
                    </p>
                );
            });

        return (
            <div className={styles.Right}>
                {content.headline && <h3 className={intro.headline}>{content.headline}</h3>}
                {paragraphs}
            </div>
        );
    }
}

export default Right;