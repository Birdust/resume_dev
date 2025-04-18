import { Component } from "react";
import { header, intro, skills, main, footer } from "../resume";
import { Header, Intro, Skills, Main, Footer,FooterAboutMe } from "../components/index"
// import FooterAboutMe from "../components/footerAboutMe/Container"; // 새로 추가
import styles from "../styles.module.scss"

class Resume extends Component {
    render() {
        return (
            <div className={styles.Resume}>
                <Header contents={header} />
                <Intro contents={intro} />
                {/* <Skills contents={skills} /> */}
                {main.map((contents, index) => <Main key={index} contents={contents} />)}
                <Footer contents={footer} />
                {/* <FooterAboutMe /> Footer 아래에 추가 - 잠시 비공개*/}
            </div>
        );
    }
}

export default Resume;
