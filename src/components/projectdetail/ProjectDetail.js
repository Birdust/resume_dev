import { Component, Fragment } from 'react';
import styles from '../../styles.module.scss';

class ProjectDetail extends Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (e) => {
        if (e.key === 'Escape') this.props.close();
    }

    renderSection = (section, index) => {
        return (
            <section key={index} className={styles.detailSection}>
                {section.heading && (
                    <h4><span className={styles.detailNo}>{String(index + 1).padStart(2, '0')}</span>{section.heading}</h4>
                )}
                {section.body && section.body.map((line, i) => <p key={i}>{line}</p>)}
                {section.list && (
                    <ul>{section.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
                )}
                {section.flow && (
                    <div className={styles.detailFlow}>
                        {section.flow.map((step, i) => (
                            <Fragment key={i}>
                                {i > 0 && <span className={styles.flowArrow}>&gt;</span>}
                                <div className={styles.flowBox}>{step}</div>
                            </Fragment>
                        ))}
                    </div>
                )}
                {section.asis && (
                    <table className={styles.detailAsis}>
                        <thead>
                            <tr><th>항목</th><th>AS-IS</th><th>TO-BE</th></tr>
                        </thead>
                        <tbody>
                            {section.asis.map((row, i) => (
                                <tr key={i}>
                                    <td className={styles.asisLabel}>{row[0]}</td>
                                    <td className={styles.asisBefore}>{row[1]}</td>
                                    <td className={styles.asisAfter}>{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {section.table && (
                    <table className={styles.detailTable}>
                        <thead>
                            <tr>{section.table.head.map((th, i) => <th key={i}>{th}</th>)}</tr>
                        </thead>
                        <tbody>
                            {section.table.rows.map((row, i) => (
                                <tr key={i}>{row.map((td, j) => <td key={j}>{td}</td>)}</tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {section.takeaway && <p className={styles.detailTakeaway}>{section.takeaway}</p>}
            </section>
        );
    }

    render() {
        const detail = this.props.detail;

        return (
            <div className={styles.detailOverlay} onClick={this.props.close}>
                <div className={styles.detailWindow} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.detailTitleBar}>
                        <div className={styles.detailDots}>
                            <span /><span /><span />
                        </div>
                        <div className={styles.detailUrl}>{detail.title}</div>
                        <button className={styles.detailClose} onClick={this.props.close}>&times;</button>
                    </div>
                    <div className={styles.detailBody}>
                        {detail.kicker && <div className={styles.detailKicker}>{detail.kicker}</div>}
                        <h3>{detail.headline || detail.title}</h3>
                        {detail.lead && <p className={styles.detailLead}>{detail.lead}</p>}
                        {detail.chips && (
                            <div className={styles.detailChips}>
                                {detail.chips.map((chip, i) => <span key={i}>{chip}</span>)}
                            </div>
                        )}
                        {detail.sections.map(this.renderSection)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetail;
