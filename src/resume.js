import { details } from "./details";

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
    교통관제·철도 시스템을 개발하며 백엔드 서버부터 데이터베이스와 현장 장비까지 연결되는 시스템을 직접 구축하고 운영해 왔습니다.
    Java/Spring Boot, TypeScript/NestJS, Python을 기반으로 REST API와 실시간 통신 시스템을 개발하고
    PostgreSQL을 활용한 데이터 처리와 성능 최적화를 수행했습니다.

    운영 환경에서 발생하는 문제를 단순히 수정하는 데 그치지 않고,
    데이터와 실험을 통해 원인을 확인하고 구조적으로 해결하는 과정을 중요하게 생각합니다.
    2,890만 행의 조회 성능을 분석해 11.3초에서 78ms로 개선했고, 동시 요청에서 데이터가 덮어써지는 문제를
    실제 저장 결과를 비교해 발견한 뒤 DB 락 기반으로 구조를 재설계해 40건 중 33건의 유실을 0건으로 개선했습니다.

    서버 개발에만 머무르지 않고 Linux, Docker, WebSocket, 임베디드 장비, 신호제어기 등
    실제 시스템이 동작하는 환경까지 직접 다루며 문제를 해결해 왔습니다.
    하나의 기능보다 그 기능이 운영 환경에서 지속적으로 안정하게 동작하는 구조를 만드는 것이 중요하다는 것을 배웠습니다.

    새로운 기술을 빠르게 적용하는 것에 그치지 않고, 문제의 원인을 깊이 이해하고
    오래 흔들리지 않는 시스템을 만드는 백엔드 개발자로 성장하겠습니다.
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

export const achievements = {
    subject: "Key Achievements",
    contents: [
        {
            metric: "11.3s → 78ms",
            title: "2,890만 행 PostgreSQL 조회 성능 개선",
            desc: "인덱스를 타지 못하던 쿼리를 재작성하고 복합 인덱스를 설계해 조회 시간을 약 99.3% 단축"
        },
        {
            metric: "2,161 → 3",
            title: "반복 DB 조회 구조 개선",
            desc: "행마다 발생하던 조회를 일괄 조회로 변경해 쿼리 수를 2,161개에서 3개로 줄이고 처리 시간을 4.4초에서 11ms로 단축"
        },
        {
            metric: "33건 → 0건",
            title: "동시성 문제로 발생하던 출동 기록 유실 해결",
            desc: "동시 40건 요청에서 발생하던 데이터 덮어쓰기 문제를 DB 락 기반 공통 처리 구조로 재설계하고 A/B 비교로 검증"
        },
        {
            metric: "26% → 97%",
            title: "NestJS → Spring Boot API 전환 검증",
            desc: "기존 API와 신규 API의 응답을 자동 비교하는 검증 도구를 구축하고 동작 일치율을 26%에서 97%까지 개선"
        },
    ],
};

export const research = {
    subject: "Skills",
    contents: [
        {
            title: " ",
            subtitle: "",
            period: "Backend",
            link: "",
            desc: [
            { main: "Java / Spring Boot — 운영 API 개발과 NestJS에서 Spring Boot로의 전환", sub: [] },
            { main: "TypeScript / NestJS — 교통관제 API 및 실시간 서비스 개발", sub: [] },
            { main: "Python / asyncio — 비동기 서버 및 실시간 신호 제어 시스템 개발", sub: [] },
            { main: "REST API / WebSocket / Socket.IO — 관제·장비 연동과 실시간 데이터 처리", sub: [] },
            { main: "SQL — 대용량 조회 최적화, 복합 인덱스 설계, 동시성 제어", sub: [] } ],
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
            desc: [
            { main: "PostgreSQL / TypeORM", sub: [] },
            { main: "Docker / Jenkins / GitHub Actions", sub: [] },
            { main: "Linux / systemd / PM2", sub: [] },
            { main: "Prometheus / Grafana / AlertManager", sub: [] } ],
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
            desc: [
            { main: "MCP / LLM Function Calling / NLQ", sub: [] },
            { main: "YOLO / OpenCV", sub: [] },
            { main: "ROS / Gazebo", sub: [] },
            { main: "임베디드 리눅스 / 시리얼 통신 / Jetson Nano / Raspberry Pi", sub: [] } ],
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
                { group: "익산 교통관제 시스템 개발", detail: details.iksan },
                { main: "긴급차 우선신호 시스템 개편", sub: [
                    "구형 Node.js 서버를 Python 비동기 서버로 전면 개편하고 단일 차량 운행을 최대 5대 동시 운행으로 확장",
                    "병원행 고정 경로에서만 동작하던 우선신호를 임의 목적지 전 경로로 범용화",
                    "교차로 선정과 방위 계산 로직을 재정리하고 실주행 경로 시뮬레이션으로 검증",
                    "출동 기록이 유실되던 동시성 결함을 DB 락 기반 공통 함수로 재설계",
                    "A/B 비교로 검증해 동시 40건 중 33건 유실을 0건으로 제거",
                    "Prometheus·Grafana·AlertManager 기반 실시간 모니터링·알람 인프라 구축",
                ] },
                { main: "자연어 질의 기반 대화형 AI 구축", detail: details.conversationalAi, sub: [
                    "MCP와 LLM Function Calling 기반 한국어 자연어 질의 시스템 개발",
                    "운영 데이터 조회·CSV 추출·신호 연동 진단 등 조회 도구 구현",
                    "신호계획과 실제 운영 이력을 대조해 연동 상태를 진단하고 개선안을 제안하는 AI 서비스로 확장",
                    "AI가 운영 데이터에 영향을 줄 수 없도록 권한·검증·인증을 겹친 다층 보안 체계 설계",
                ] },
                { group: "성남 교통관제 시스템 고도화", detail: details.seongnamUpgrade },
                { main: "관제센터 API 서버 Spring Boot 전환", sub: [
                    "관제센터 시스템의 기술 스택 단일화를 위해 운영 중인 NestJS API를 Java Spring Boot로 재구현",
                    "전환 전후 응답을 자동 대조하는 검증 도구를 구축해 일치율을 26%에서 97%로 정렬",
                    "기술 스택을 현대화하고 비밀번호 해시 무인증 노출 등 잠재 결함 발견·수정",
                ] },
                { group: "영상 AI 신호 시스템 개발", detail: details.visionAi },
                { main: "안성·장흥 좌회전 감응 신호 시스템", sub: [
                    "Jetson Nano에 YOLO 모델을 올려 좌회전 대기 차량을 실시간 인식하는 파이프라인 구축",
                    "순간 오인식에 흔들리지 않도록 일정 시간의 인식 결과를 모아 판정",
                    "하드웨어 디코딩과 최신 프레임 우선 처리로 카메라 영상 스트림의 지연 제거",
                    "다중 카메라 4채널 동시 인식과 열화상 처리로 야간·악천후 대응",
                    "신호제어기로만 보내던 인식 결과를 웹에서도 실시간으로 확인하도록 통신 구조 확장",
                ] },
                { group: "철도 열차제어설비 개발", detail: details.railwayControl },
                { main: "고속철도 열차제어설비 모니터링·시뮬레이션 통합 개발", sub: [
                    "설비 입출력 상태를 실시간으로 모니터링하고 실장비 없이 검증하는 시뮬레이터 구축",
                    "PyQt5 데스크톱·Flask 웹 중계 서버·설비 정보 관리 REST API 개발",
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
                { group: "성남 교통관제 시스템 개발", detail: details.seongnamDev },
                { main: "교통관제 백엔드 조회 성능 개선", sub: [
                    "인덱스를 타지 못하던 쿼리를 재작성하고 복합 인덱스를 설계해 2,890만 행 조회를 11.3초에서 78ms로 단축",
                    "행마다 왕복하던 조회를 일괄 조회로 재설계해 쿼리 2,161개를 3개로 통합하고 4.4초를 11ms로 단축",
                ] },
                { main: "긴급차 우선신호 시스템 개발", sub: [
                    "신호제어기와 소켓 통신으로 연동해 긴급차 경로 상의 교차로 신호를 우선 제어",
                    "실시간 위치 추적과 비동기 신호 자동화 구현",
                    "경로 로그 API로 관제센터 조회를 지원하고 Jenkins 기반 CI/CD 구성",
                ] },
                { group: "철도 신호 계측기 개발", detail: details.railwayMeasure },
                { main: "계전기 시험기", sub: [
                    "산업용 보드 Allwinner T507에 OS를 직접 빌드해 계측기 플랫폼 구성",
                    "계전기 6종의 저항을 자동 측정하고 양품과 불량을 판정하는 로직 구현",
                    "PC와 네트워크 없이 USB만으로 안전하게 업데이트하고 실패하면 자동 롤백되도록 설계",
                ] },
                { main: "선로전환기 전환력 측정기", sub: [
                    "계측보드 데이터를 수신하는 시리얼 통신을 Python으로 구현하고 CRC로 전송 오류 검출",
                    "센서 원시 신호를 kgf 단위 실제 전환력 값으로 보정하고 장비 모델별 보정값을 DB로 관리",
                    "초당 100회 수집되는 데이터가 지연되지 않도록 수신·저장·전송을 병렬 프로세스로 분리",
                    "로그 조회·설정 관리 API 개발과 라즈베리파이 현장 배포 구성",
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
                { main: "자율 착륙 알고리즘 개발 · 영상 인식 파트 담당", detail: details.drone, sub: [
                    "ROS·Gazebo 기반 드론 시뮬레이션 환경 구축과 영상 기반 장애물 탐지",
                    "시맨틱 세그멘테이션으로 드론 카메라 영상의 착륙 후보 영역을 픽셀 단위로 분할",
                    "세그멘테이션 결과를 OpenCV로 변환해 그리드로 나누고 그리드별 안정성 점수로 착륙 후보 선정",
                    "포인트 클라우드로 착륙 후보 지점의 지형을 확인해 안전한 평탄 영역 도출",
                    "항공 영상 특성을 반영한 그리드 분할로 실시간 처리를 최적화해 최종 착륙 지점 도출",
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

export const footer = { updated: "2026. 08. 29." };

export const main = [research, experience, awards, education, certificate, language] // projects 잠시 주석처리