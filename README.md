# Ability English Website

화상영어 교육 플랫폼 - 어빌리티 잉글리시 공식 웹사이트

![Website Preview](https://img.shields.io/badge/status-live-brightgreen)
![Mobile Responsive](https://img.shields.io/badge/mobile-responsive-blue)

## 🌟 Features

- 📱 **완전 반응형 디자인** - 모바일 최적화 (iPhone SE 375px부터 지원)
- 🎨 **모던한 UI/UX** - Tailwind CSS 기반 깔끔한 디자인
- 📚 **Learning Lab** - Daily Routine, Business & Career, Bigbox
- 👨‍🏫 **강사 소개 시스템** - JSON 데이터 기반 동적 로딩
- 📊 **레벨 테스트** - 5단계 프로세스 안내
- 🍔 **햄버거 메뉴** - 모바일 네비게이션 최적화

## 🛠 Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Lucide Icons](https://lucide.dev/)
- Vanilla JavaScript (SPA)
- Google Fonts (Inter)

## 📁 Project Structure

```
.
├── index.html              # 메인 웹사이트 파일 (SPA)
├── images/                 # 이미지 리소스
│   ├── intro/             # About/Teachers 이미지
│   ├── premium/           # Premium 코스 이미지
│   ├── daily메뉴용/        # Learning Lab - Daily
│   └── Business 메뉴용/    # Learning Lab - Business
├── data/                   # JSON 데이터
│   └── teachers.json      # 강사 정보
└── VERSION_README.md       # 버전 관리 정보
```

## 🚀 Quick Start

### 로컬 실행

1. 저장소 클론
```bash
git clone https://github.com/gomteng4/ability-english-website.git
cd ability-english-website
```

2. 브라우저로 열기
```bash
# 방법 1: 직접 열기
open index.html  # Mac
start index.html # Windows

# 방법 2: Live Server 사용 (VSCode 확장)
```

### Vercel 배포

이 프로젝트는 [Vercel](https://vercel.com)에 자동 배포됩니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gomteng4/ability-english-website)

## 📱 Responsive Design

- **모바일**: 375px ~ 767px
- **태블릿**: 768px ~ 1023px
- **데스크탑**: 1024px+

### 모바일 최적화
- ✅ 햄버거 메뉴 네비게이션
- ✅ 1열 카드 레이아웃
- ✅ 터치 친화적 버튼 (최소 44px)
- ✅ 가로 스크롤 탭 메뉴

## 🎯 Main Pages

- **Home** (`#home`) - 랜딩 페이지
- **About** (`#intro/about`) - 회사 소개
- **Level Test** (`#leveltest/guide`) - 레벨 테스트 안내
- **Learning Lab**
  - Daily Routine (`#square/daily`)
  - Business (`#square/business`)
  - Bigbox (`#square/bigbox`)
- **Teachers** (`#intro/teachers`) - 강사 소개
- **Courses** (`#courses/map`) - 전체 과정

## 🔄 Version History

자세한 버전 정보는 [VERSION_README.md](VERSION_README.md)를 참조하세요.

## 📄 License

© 2026 Ability English. All rights reserved.

## 🤝 Contributing

이 프로젝트는 개인 프로젝트이며, 기여는 현재 받지 않습니다.

## 📧 Contact

- Website: [Coming Soon]
- Email: ommeca@gmail.com
- GitHub: [@gomteng4](https://github.com/gomteng4)
