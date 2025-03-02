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


    정보통신학부를 졸업하며 하드웨어와 소프트웨어를 함께 응용하는 로봇 개발과


    소프트웨어 중심의 웹 개발, 앱 개발 등 다양한 분야에 관심을 가지게 되었습니다.


    현재는 백엔드 개발을 위주로 공부하며 통신을 통해 하드웨어와 소통하고 웹을 통해


    사용자에게 서비스를 제공하는 것을 목표로 하고 있습니다.

    
    제가 개발한 기술이 사회에 긍정적인 변화를 가져오는 것을 목표로 개발을 진행합니다.

    `
};

// export const skills = {
//     subject: "Skills",
//     contents: [
//         {
//             category: "Frontend",
//             desc: [
//                 { name: "HTML" },
//                 { name: "CSS" },
//                 { name: "JavaScript" }
//             ]
//         },
//         {
//             category: "Backend",
//             desc: [
//                 { name: "Python", proficiency: 70 },
//                 { name: "JAVA", proficiency: 50 },
//                 { name: "Nestjs" , proficiency: 40},
//                 { name: "Spring Boot", proficiency: 40 },
//             ]
//         },
//         {
//             category: "DevOps",
//             desc: [
//                 { name: "MySQL", proficiency: 40 },
//                 { name: "MySQL", proficiency: 40 },
//                 { name: "MySQL", proficiency: 40 }
//             ]
//         },
        
//     ],
// };

export const research = {
    subject: "Skills",
    contents: [
        {
            title: " ",
            subtitle: "REST API 서버와 웹소켓 통신을 구현할 수 있습니다. 서비스에 필요한 DB를 구축하고 Query를 정의할 수 있습니다.",
            period: "Backend",
            link: "",
            desc: [{ main: "Python, Java, JavaScript", sub: [] }, { main: "NestJS, Spring Boot, FastAPI, WebSocket", sub: [] }, 
            { main: "MySQL, PostgreSQL", sub: [] } ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: " ",
            subtitle: " 간단한 컴포넌트 구현 및 UI 디자인을 할 수 있습니다. 원활한 협업을 위한 UI 구성 방식에 대해 이해하고 있습니다.",
            period: "Frontend",
            link: "",
            desc: [{ main: "HTML, CSS, JavaScript", sub: [] }, { main: "React, NextJS", sub: [] }, ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: " ",
            subtitle: "시뮬레이터를 사용하여 로봇을 제어하고 시뮬레이션 할 수 있습니다. 로봇의 행동을 제어하는 알고리즘을 구현할 수 있습니다.",
            period: "Robotics Software",
            link: "",
            desc: [{ main: "Python", sub: [] }, { main: "ROS, Gazebo, OpenCV, Lidar", sub: [] }, 
            { main: "Ubuntu 20.04, Jetson Xavier NX", sub: [] } ],
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
            title: "동부 ICT",
            subtitle: "성남시 ITS 구축사업 - 기업 부설 연구소 연구원",
            period: "2024.08 ~ 2024.12",
            link: "",
            desc: [
                { main: `소켓 통신을 활용한 긴급차 우선 신호 시스템을 개발`, sub: []},
                { main: `긴급차량 이동 경로 기반 특정 신호 요청 및 디지털 신호기 제어 구현`, sub: [] },
                { main: `실시간 다중 차량 경로 및 긴급차 위치 추적, 비동기 처리로 신호 변경 자동화`, sub: [] },
                { main: "통신 데이터 DB 저장, 이동 경로 로그 API로 관제 센터 데이터 조회 지원", sub: [] },
                { main: "Jenkins 활용 배포 자동화 및 CI/CD 프로세스 개선", sub: [] },
                { main: "Nest.js 기반 REST API 설계 및 개발 기술 습득", sub: [] },
            ],
            keywords: ["NestJS", "WebSocket", "PostgreSQL", "Python", "Jenkins", "Docker"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "R&D 학생 연구원",
            subtitle: "센서 융합 기반 자율비행 배송드론 시스템 개발",
            period: "2023.05 ~ 2024.05",
            link: "",
            desc: [
                { main: "YOLO 객체 탐지 이론 학습 및 OpenCV 실습", sub: [] },
                { main: "ROS와 Gazebo 활용 드론 시뮬레이션 환경 구축", sub: [] },
                { main: "스테레오 카메라 기반 장애물 탐지 알고리즘 구현", sub: [] },
                { main: "Semantic Segmentation 및 포인트 클라우드로 안전 착륙지 탐지", sub: [] },
                { main: "Lidar 활용 이륙 장애물 탐지 알고리즘 개발", sub: [] },
            ],
            keywords: ["OpenCV", "ROS", "Gazebo", "Jetson Xavier NX", "Python", "Ubuntu 20.04"],
            folder: "rnd",
            images: ["drone1.png","drone2.png","drone3.png", "drone4.png"],
            pdfs: []
        },
    ],
};

// export const projects = {
//     subject: "Projects",
//     contents: [
//         {
//             title: "Simple React Resume Template",
//             subtitle: "심플한 리액트 이력서 템플릿",
//             period: "2021.01 ~ 2021.12",
//             link: "",
//             desc: [
//                 { main: "심플한 이력서 템플릿", sub: ["리액트로 제작됨"] }
//             ],
//             keywords: ["React", "HTML", "CSS", "JavaScript"],
//             folder: "simple-react-resume-template",
//             images: ["1.png"],
//             pdfs: [
//                 { pdf: "1.pdf", thumbnail: "1-thumbnail.png" },
//                 { pdf: "1.pdf", thumbnail: "2-thumbnail.png" },
//             ]
//         },
//         {
//             title: "",
//             subtitle: "",
//             period: "",
//             link: "",
//             desc: [],
//             keywords: [],
//             folder: "",
//             images: [],
//             pdfs: []
//         },
//     ]
// };

export const awards = {
    subject: "Awards",
    contents: [
        {
            title: "2024 정보통신학부 캡스톤 경진 대회 - 우수상",
            subtitle: " ",
            period: "2024.06.18",
            link: "",
            desc: [{ main: "Enterprise 환경에서 Spring Boot Full Stack 기반의 Mobile Web App E-commerce 시스템의 설계 및 구현", sub: [] },
            { main: "빵 예약 서비스와 오늘의 빵 확인 시스템 개발", sub: [] },
        
        ],
            keywords: ["Spring Boot", "Spring JPA", "MySQL"],
            folder: "capstone",
            images: ["stone1.png","stone2.png","stone3.png","stone4.png"],
            pdfs: []
        },
        {
            title: "새온 자율주행 자동차 AI 미션 챌린지 - 금상",
            subtitle: " ",
            period: "2023.08.04",
            link: "",
            desc: [{ main: "적외선 센서를 이용한 자율 주행 자동차 경로 탐색 알고리즘 개발", sub: [] }],
            keywords: ["C"],
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
            title: "세명대학교",
            subtitle: "정보통신학부",
            period: "2021.03 ~ 2025.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "경화여자 고등학교",
            subtitle: "",
            period: "2017.03 ~ 2020.02",
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
            period: "2024.06.18",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "네트워크 관리사 2급",
            subtitle: "한국정보통신자격협회",
            period: "2024.12.10",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2025. 03. 01." };

export const main = [research, experience, awards, education, certificate] // projects 잠시 주석처리