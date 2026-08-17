export const header = {
    name: "김언지",
    desc: "Backend Developer",
    email: "djswl0922@gmail.com",
    github: "https://github.com/Birdust",
    // blog: "https://",
};

export const intro = {
    subject: "Introduce",
    profile: "profile2.jpg",
    headline: "깊이 파고들어 오래가는 시스템을 만드는 개발자",
    intro: `
    주어진 기능을 구현하는 데 그치지 않습니다. 운영 중인 시스템이 왜 느리고 문제가 생기는지 스스로 질문을 던지고
    원인을 근본까지 추적해 다시 설계합니다.

    조회가 느린 이유를 데이터베이스 인덱스 구조까지 파고들어 개선했고,
    오류 없이 정상 응답하면서 데이터를 덮어쓰던 동시성 결함을 실제 저장 건수를 세어보고서야 찾아냈습니다.
    에러도 없이 조용히 실패하는 결함까지 드러내 끝까지 책임지는 것이 제 방식입니다.

    서버에 머무르지 않고 그 서버가 실제로 도는 현장 장비와 운영 환경까지 직접 챙깁니다.
    필요한 일이면 경계를 긋지 않고 먼저 나서서 완성합니다.

    오래 흔들리지 않는 시스템을 만드는 데 집중하겠습니다.
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
            subtitle: "",
            period: "Backend",
            link: "",
            desc: [{ main: "TypeScript, Java, Python, JavaScript, SQL", sub: [] }, { main: "NestJS, Spring Boot, TypeORM, Flask, REST API", sub: [] },
            { main: "Socket.IO, WebSocket, asyncio", sub: [] } ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: " ",
            subtitle: "",
            period: "Database / DevOps",
            link: "",
            desc: [{ main: "PostgreSQL — 인덱스·쿼리 튜닝, 동시성 처리, 마이그레이션", sub: [] }, { main: "Docker, Jenkins, GitHub Actions", sub: [] },
            { main: "Linux, systemd, PM2", sub: [] },
            { main: "Prometheus, Grafana", sub: [] } ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: " ",
            subtitle: " ",
            period: "AI / Embedded",
            link: "",
            desc: [{ main: "MCP, LLM Function Calling, NLQ", sub: [] }, { main: "YOLO, OpenCV, ROS", sub: [] },
            { main: "임베디드 리눅스, 시리얼 통신, Jetson Nano, Raspberry Pi", sub: [] } ],
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
            title: "SAIG",
            subtitle: "연구개발 연구원 · 교통관제·ITS 백엔드 / 대화형 AI / 철도 열차제어설비",
            period: "2025.12 ~ 현재",
            link: "",
            desc: [
                { main: "교통관제 대화형 AI 구축 (자연어 질의 기반 조회)", sub: [
                    "MCP·LLM Function Calling으로 한국어 질의(NLQ) 조회·설명 기능 신규 개발",
                    "AI는 조회·설명만, 제어·변경 불가 — 읽기 전용 계정·질의 검증·인증 다층 보안 설계",
                ] },
                { main: "교통관제 API Spring Boot 이관 (NestJS → Java)", sub: [
                    "응답 자동 대조 도구를 먼저 구축해 두 구현 일치율 26% → 97% 정렬",
                    "지원 종료 스택(JDK 8) 최신화, 비밀번호 해시 무인증 노출 등 잠재 결함 발견·수정",
                ] },
                { main: "긴급차 우선신호 시스템 개편 (Node.js → Python)", sub: [
                    "구형 Node.js를 Python 비동기 서버로 전면 개편, 단일 → 최대 5대 동시 운행",
                    "병원행 고정 경로만 되던 것을 임의 목적지·모든 긴급상황 대응으로 범용화",
                    "좌표 처리 로직 리팩토링, 실주행 경로로 검증",
                    "Prometheus·Grafana·AlertManager로 실시간 모니터링·알람 인프라 구축",
                ] },
                { main: "고속철도 열차제어설비(TFM) 모니터링·시뮬레이션 통합 개발", sub: [
                    "입출력 상태 실시간 모니터링 + 실장비 없이 검증하는 시뮬레이터 구축",
                    "PyQt5 데스크톱·Flask 웹 중계 서버·설비 자산 관리 REST API 개발",
                ] },
            ],
            keywords: ["NestJS", "Java", "Spring Boot", "NLQ", "MCP", "PostgreSQL", "Python", "PyQt5", "Flask", "Prometheus", "Grafana"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "글로벌메타",
            subtitle: "연구개발 연구원 · 교통관제·ITS 백엔드 / 철도 계측기 (연구소 SAIG 이전)",
            period: "2025.01 ~ 2025.12",
            link: "",
            desc: [
                { main: "교통관제 백엔드 조회 성능 개선", sub: [
                    "2,890만 행 조회 11.3초 → 78ms(약 144배) — 인덱스 미활용 쿼리 재작성 + 복합 인덱스 설계",
                    "행마다 왕복하던 조회를 일괄 조회로 재설계 — 쿼리 2,161개 → 3개, 4.4초 → 11ms",
                ] },
                { main: "실시간 신호제어 동시성 문제 해결 — 동시 40건 중 33건 유실 → 0건", sub: [
                    "다중 제어 명령 충돌·유실을 DB 락 기반 공통 함수로 재설계 (정상 응답하며 앞 기록을 덮어쓰던 문제)",
                    "같은 결함이 API 서버 17곳에 존재함을 발견해 일괄 수정, A/B 비교로 검증",
                ] },
                { main: "긴급차 우선신호 시스템 개발", sub: [
                    "소켓 통신으로 신호제어기와 연동, 긴급차 경로 상 교차로 신호 우선 제어",
                    "실시간 위치 추적·비동기 신호 자동화, 경로 로그 API로 관제센터 조회 지원, Jenkins 기반 CI/CD",
                ] },
                { main: "좌회전 감응 신호 시스템 (영상 AI)", sub: [
                    "엣지 장비에 YOLO로 좌회전 대기 차량 실시간 인식, 안성·장흥 실도로 배포",
                    "신호제어기로만 보내던 인식 결과를 웹에서도 실시간으로 확인할 수 있도록 통신 구조 확장",
                ] },
                { main: "철도 신호용 계전기 시험기 개발", sub: [
                    "산업용 보드(Allwinner T507)에 Ubuntu·Python 직접 빌드, 계전기 6종 저항 자동 측정·양불 판정 엔진 구현",
                    "무인 키오스크 운영, PC·네트워크 없이 USB만으로 안전 업데이트·실패 시 자동 롤백 설계",
                ] },
                { main: "선로전환기 전환력 측정기 개발", sub: [
                    "센서 원시 신호를 실제 전환력 값(kgf)으로 변환, 초당 100회 수집 데이터 저장",
                    "웹 화면엔 대표값만 실시간 표시해 표시 부하 절감",
                ] },
            ],
            keywords: ["NestJS", "WebSocket", "TypeORM", "PostgreSQL", "Python", "YOLO", "Jetson Nano", "Flask", "Jenkins", "임베디드 리눅스"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "학부 연구생 (R&D)",
            subtitle: "센서 융합 기반 자율비행 배송드론 시스템 · 영상 인식(자율 착륙) 담당",
            period: "2023.05 ~ 2024.05",
            link: "",
            desc: [
                { main: "ROS·Gazebo 기반 드론 시뮬레이션 환경 구축 및 영상 기반 장애물 탐지", sub: [] },
                { main: "자율 착륙 알고리즘 개발 (영상 인식 파트 담당)", sub: [
                    "시맨틱 세그멘테이션으로 드론 카메라 영상의 착륙 후보 영역을 픽셀 단위 분할",
                    "세그멘테이션 결과를 OpenCV로 변환·그리드 분할 후, 그리드별 안정성 점수로 착륙 후보 선정",
                    "포인트 클라우드로 착륙 후보 지점의 평탄도를 검증해 안전한 평탄 영역 도출",
                    "항공 영상 특성을 반영한 Grid division으로 실시간 처리 최적화, 최종 안전 착륙 지점 도출",
                ] },
            ],
            keywords: ["Semantic Segmentation", "OpenCV", "Point Cloud", "ROS", "Gazebo", "Jetson Xavier NX", "Python"],
            folder: "rnd",
            images: [ ],
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
            images: [],
            pdfs: []
        },
        {
            title: "새온 자율주행 자동차 AI 미션 챌린지 - 금상",
            subtitle: " ",
            period: "2023.08.04",
            link: "",
            desc: [{ main: "적외선 센서 입력을 기반으로 실시간 주행 경로를 탐색하는 자율주행 제어 알고리즘을 C로 구현", sub: [] }],
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
            subtitle: "정보통신학부 (학사)",
            period: "2021.03 ~ 2025.02",
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
            title: "SQL 개발자 (SQLD)",
            subtitle: "한국데이터산업진흥원",
            period: "2025.06.27",
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

export const language = {
    subject: "Language",
    contents: [
        {
            title: "TOEIC Speaking — IH (Intermediate High)",
            subtitle: "ETS (YBM)",
            period: "2026.08.13",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2026. 08. 13." };

export const main = [research, experience, awards, education, certificate, language] // projects 잠시 주석처리