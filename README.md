# 어빌리티 잉글리시 - 폴더 구조

```
ability-english/
├── index.html                  ✅ 메인 홈페이지
├── enrollment.html             ⏳ 수강료 계산기 (다음에 생성)
├── contact.html                ⏳ 1:1 문의
│
├── js/
│   └── common.js              ✅ 공통 헤더/푸터 로드 스크립트
│
├── about/                     앤보임 소개
│   ├── about-nvoim.html       ✅ About Nvoim
│   ├── teachers.html          ⏳ 강사 소개
│   ├── teacher-list.html      ⏳ 강사리스트
│   ├── rules.html             ⏳ 수강규정
│   ├── guide.html             ⏳ 학습 가이드
│   ├── planner.html           ⏳ 플래너
│   └── premium-course.html    ⏳ 프리미엄 코스
│
├── curriculum/                과정소개
│   ├── all.html               ⏳ 전체 과정맵
│   ├── immersion.html         ✅ 이머전
│   ├── senior.html            ⏳ 앤시니어
│   ├── hangout.html           ⏳ 행아웃
│   ├── momentum-a.html        ⏳ 모멘텀 A
│   ├── nlife.html             ⏳ 앤라이프
│   ├── icantalk.html          ⏳ 아이캔톡
│   ├── daily.html             ⏳ 데일리앤보임
│   ├── eea.html               ⏳ EEA
│   ├── momentum-c.html        ⏳ 모멘텀C
│   ├── cbe.html               ⏳ CBE
│   ├── toeic-beginner.html    ⏳ 토익스피킹 비기너
│   ├── toeic.html             ⏳ 토익스피킹
│   ├── opic.html              ⏳ 오픽
│   ├── momentum-b.html        ⏳ 모멘텀B
│   ├── premium-speaking.html  ⏳ 프리미엄 말하기
│   ├── premium-reading.html   ⏳ 프리미엄 읽기
│   ├── premium-grammar.html   ⏳ 프리미엄 문법
│   └── premium-writing.html   ⏳ 프리미엄 쓰기
│
├── level-test/                레벨테스트
│   ├── info.html              ⏳ 레벨테스트 안내
│   ├── apply.html             ⏳ 레벨테스트 신청
│   └── ai.html                ⏳ AI 레벨테스트
│
└── plaza/                     영어광장
    ├── daily.html             ⏳ 데일리 앤보임
    ├── business.html          ⏳ 비즈니스 앤보임
    └── bigbox.html            ⏳ 앤보임빅박스
```

## ✅ 완성된 파일
1. `index.html` - 메인 홈페이지
2. `js/common.js` - 공통 헤더/푸터
3. `about/about-nvoim.html` - About Nvoim 페이지
4. `curriculum/immersion.html` - 이머전 과정 페이지

## ⏳ 생성 예정
나머지 페이지들은 동일한 템플릿을 사용하여 쉽게 생성 가능합니다.

## 🚀 속도 최적화
- **정적 파일**: 모든 HTML은 정적 파일이므로 CDN 배포 시 초고속
- **공통 컴포넌트**: 헤더/푸터를 한 번만 수정하면 모든 페이지에 자동 반영
- **최소 JavaScript**: 헤더/푸터 로드용 JS만 사용 (매우 가벼움)
- **Tailwind CDN**: 빌드 없이 즉시 사용 가능

## 📂 배포 방법
1. **GitHub Pages**: 무료, 자동 CDN
2. **Vercel/Netlify**: 무료, 초고속 CDN, 자동 배포
3. **AWS S3 + CloudFront**: 프로덕션급 CDN

현재 구조는 어디든 그대로 업로드하면 작동합니다!
