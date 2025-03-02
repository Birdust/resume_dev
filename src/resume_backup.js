export const header = {
    name: "김언지",
    desc: "기술로 더 나은 세상을 만드는 개발자",
    email: "djswl0922@gmail.com",
    github: "https://github.com/Birdust",
    // blog: "https://",
};

export const intro = {
    subject: "Introduce",
    profile: "profile.jpg",
    intro: `
    안녕하세요! 개발자 김언지 입니다.
    정보통신학부라는 하드웨어와 소프트웨어 모두를 배우는 학과를 졸업하면서 
    로봇 개발, 웹 개발, 앱 개발 등 다양한 분야에 관심을 가지게 되었습니다.
    프로젝트를 진행하면서 백엔드와 로봇 개발에 흥미를 느꼈습니다. 
    현재는 백엔드 개발을 위주로 공부하며 통신을 통해 하드웨어와 소통하는 기술을 익히고 있습니다.
    제가 만든 기술이 사회에 긍정적인 변화로 이어지길 바라는 개발자가 되고 싶습니다.
    만나서 반갑습니다.
    `
};

export const skills = {
    subject: "Skills",
    contents: [
        {
            category: "Frontend",
            desc: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" }
            ]
        },
        {
            category: "Backend",
            desc: [
                { name: "Python", proficiency: 70 },
                { name: "JAVA", proficiency: 50 },
                { name: "Nestjs" , proficiency: 40},
                { name: "Spring Boot", proficiency: 40 },
            ]
        },
        {
            category: "DevOps",
            desc: [
                { name: "MySQL", proficiency: 40 },
                { name: "MySQL", proficiency: 40 },
                { name: "MySQL", proficiency: 40 }
            ]
        },
        
    ],
};

export const research = {
    subject: "Research",
    contents: [
        {
            title: "~ Journal",
            subtitle: "<span style='color: #000000; font-size: 1.5rem;'>~ 연구</span>", // inline 스타일 적용
            period: "2021.01.01",
            link: "",
            desc: [{ main: "~ 에 관한 연구", sub: [] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const experience = {
    subject: "Experience",
    contents: [
        {
            title: "~ 근무",
            subtitle: "~ 프로젝트 참여",
            period: "2021.01 ~ 2021.12",
            link: "",
            desc: [
                { main: "~ 사내 프로젝트 참여", sub: ["~ 라이브러리 사용", "~ 백엔드 개발자로 참여"] },
                { main: "~ 사내 프로젝트 참여", sub: [] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "~ 근무",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const projects = {
    subject: "Projects",
    contents: [
        {
            title: "Simple React Resume Template",
            subtitle: "심플한 리액트 이력서 템플릿",
            period: "2021.01 ~ 2021.12",
            link: "",
            desc: [
                { main: "심플한 이력서 템플릿", sub: ["리액트로 제작됨"] }
            ],
            keywords: ["React", "HTML", "CSS", "JavaScript"],
            folder: "simple-react-resume-template",
            images: ["1.png"],
            pdfs: [
                { pdf: "1.pdf", thumbnail: "1-thumbnail.png" },
                { pdf: "1.pdf", thumbnail: "2-thumbnail.png" },
            ]
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ]
};

export const awards = {
    subject: "Awards",
    contents: [
        {
            title: "대상",
            subtitle: "~ 프로젝트",
            period: "2021.01.01",
            link: "",
            desc: [{ main: "~ 프로젝트로 입상", sub: ["~ 라이브러리 사용"] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const education = {
    subject: "Education",
    contents: [
        {
            title: "졸업",
            subtitle: "컴퓨터공학부",
            period: "2014.03 ~ 2021.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "졸업",
            subtitle: "",
            period: "2011.03 ~ 2014.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const certificate = {
    subject: "Certificate",
    contents: [
        {
            title: "정보처리기사",
            subtitle: "한국산업인력공단",
            period: "2021.01.01",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2021. 10. 11." };

export const main = [experience, projects, awards, research, education, certificate]