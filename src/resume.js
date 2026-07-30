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
    headline: "스스로 문제를 찾고, 끝까지 파고들어 해결하는 주도적인 개발자",
    intro: `
    주어진 기능을 구현하는 데 그치지 않습니다. 운영 중인 시스템이 왜 느리고 문제가 생기는지 스스로 질문을 던지고
    원인을 근본까지 추적해 다시 설계합니다.

    조회가 느린 이유를 데이터베이스 인덱스 구조까지 파고들어 개선했고
    긴급 제어 명령이 하나도 전송되지 않던 치명 오류를 좌표 처리 단계까지 거슬러 올라가 해결했습니다.
    문제를 덮지 않고 끝까지 책임지는 것이 제 방식입니다.

    서버에 머무르지 않고 그 서버가 실제로 도는 현장 장비와 운영 환경까지 직접 챙깁니다.
    필요한 일이면 경계를 긋지 않고 먼저 나서서 완성합니다.

    쉽게 읽히는 코드와 적극적인 소통으로 팀이 함께 신뢰할 수 있는 시스템을 만들고자 합니다.
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
            desc: [{ main: "TypeScript, Python, JavaScript, SQL", sub: [] }, { main: "NestJS, TypeORM, Flask, REST API", sub: [] },
            { main: "Socket.IO, WebSocket 기반 실시간 통신", sub: [] },
            { main: "비동기·동시성 처리 (asyncio, 멀티스레드, 락·재시도)", sub: [] } ],
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
            desc: [{ main: "PostgreSQL — 인덱스·쿼리 튜닝, 동시성 처리, 마이그레이션", sub: [] }, { main: "Docker, Jenkins, GitHub Actions (CI/CD)", sub: [] },
            { main: "Linux 서버 운영·배포 (systemd, PM2, 오프라인 소스 빌드)", sub: [] },
            { main: "모니터링·관측성 (Prometheus, Grafana)", sub: [] } ],
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
            desc: [{ main: "LLM 연동(Function Calling), 데이터 접근 보안 설계", sub: [] }, { main: "영상 AI(YOLO), OpenCV, ROS", sub: [] },
            { main: "임베디드 리눅스, 산업용 시리얼/네트워크 통신, Jetson Nano, Raspberry Pi", sub: [] } ],
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
                { main: "교통관제 대화형 AI 구축 (자연어 질의 기반 데이터 조회)", sub: [
                    "운영 중인 교통관제 API에 MCP·LLM Function Calling으로 한국어 질의(NLQ) 조회·설명 기능 신규 개발",
                    "'AI는 조회·설명만, 제어·변경 불가' 원칙 — 읽기 전용 DB 계정·질의 검증·접근 인증 다층 설계",
                    "단일 조회문만 허용·위험 구문 차단·테이블 화이트리스트, 보안 유닛 테스트 28건·CI 구성",
                ] },
                { main: "긴급차 우선신호 시스템 개편 (Node.js → Python)", sub: [
                    "구형 Node.js를 Python 비동기 서버로 전면 개편, 단일 → 최대 5대 동시 운행 확장",
                    "위경도→평면좌표 변환·진입 방향 4방위 분류·45m 반경 기반 신호 제어 경로 탐색 로직 설계",
                    "긴급 제어 명령이 0건 전송되던 치명 오류를 좌표 처리 단계까지 추적해 해결, 실주행 경로 검증",
                    "인터넷 없는 CentOS 7에 Python 소스 빌드로 오프라인 배포, PM2 자동 재기동",
                ] },
                { main: "고속철도 열차제어설비(TFM) 모니터링·시뮬레이션 통합 개발", sub: [
                    "입출력 상태 실시간 수집·모니터링, 실장비 없이 전체를 검증하는 시뮬레이션 환경까지 단독 구축",
                    "연동장치를 대신하는 시뮬레이터를 공유 메모리 기반으로 구현",
                    "PyQt5 데스크톱 모니터링·Flask 웹 중계 서버·설비 자산 관리 REST API 개발",
                ] },
            ],
            keywords: ["NestJS", "NLQ", "MCP", "LLM Function Calling", "PostgreSQL", "Python", "PyQt5", "Flask"],
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
                    "시간 컬럼을 문자열 LIKE로 검색해 인덱스를 못 타던 쿼리를 범위 조건으로 재작성",
                    "(교차로, 시간) 복합 인덱스 설계로 풀스캔 제거, 종료일 경계 누락 결함 동반 수정",
                    "오래된 로그 월별 CSV 백업·삭제·감사 로그로 테이블 비대화 예방",
                ] },
                { main: "실시간 신호제어 소켓 서버 동시성 문제 해결", sub: [
                    "다중 교차로 제어 시 고유번호 충돌·저장 실패를, 원자적 쿼리 통합·락 직렬화·재시도로 제거",
                    "요청별 연결 격리로 한 작업의 실패가 다른 작업에 번지지 않도록 처리",
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
            keywords: ["NestJS", "TypeORM", "PostgreSQL", "Python", "YOLO", "Jetson Nano", "Flask", "임베디드 리눅스"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "동부 ICT",
            subtitle: "인턴 연구원 · 성남시 ITS 구축사업",
            period: "2024.08 ~ 2024.12",
            link: "",
            desc: [
                { main: "긴급차 우선신호 시스템 개발", sub: [
                    "소켓 통신으로 신호제어기와 연동, 긴급차 경로 상의 교차로 신호를 우선 제어",
                    "긴급차 실시간 위치 추적·비동기 신호 자동화, 경로 로그 API로 관제센터 조회 지원",
                    "Prometheus·Grafana로 신호 제어·차량 상태 실시간 모니터링 구성",
                    "Jenkins 기반 배포 자동화로 CI/CD 프로세스 개선",
                ] },
            ],
            keywords: ["NestJS", "WebSocket", "PostgreSQL", "Python", "Prometheus", "Grafana", "Jenkins", "Docker"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "학부 연구생 (R&D)",
            subtitle: "센서 융합 기반 자율비행 배송드론 시스템",
            period: "2023.05 ~ 2024.05",
            link: "",
            desc: [
                { main: "ROS·Gazebo 기반 드론 시뮬레이션 환경 구축", sub: [] },
                { main: "YOLO·OpenCV 장애물 탐지, 시맨틱 세그멘테이션 기반 안전 착륙지 탐지 알고리즘 개발", sub: [] },
            ],
            keywords: ["OpenCV", "ROS", "Gazebo", "Jetson Xavier NX", "Python"],
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

export const footer = { updated: "2026. 07. 29." };

export const main = [research, experience, awards, education, certificate] // projects 잠시 주석처리