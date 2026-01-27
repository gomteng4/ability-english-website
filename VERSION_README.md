# Ability English 웹사이트 버전 관리

## 현재 버전
- **파일명**: `ability-english-full.html`
- **버전**: v2.0 (2026-01-27)
- **상태**: Stable ✅

## 버전 히스토리

### v2.0 - 2026-01-27 (Stable)
**백업 파일**: `ability-english-full-backup-20260127-stable.html`

#### 주요 변경사항
1. **러닝 랩 (Learning Lab)** 메뉴 완전 재구성
   - 매일 영어 루틴 (Daily Routine) - 이미지 & MP3 연동
   - 커리어 & 비즈니스 (Business) - AI 교정 데모
   - 무제한 영어 도서관 (Bigbox) - 4개 섹션 구현

2. **About Ability English** 페이지 디자인 일관성 개선
   - 어두운 보라색 테마 → 깔끔한 화이트 카드 레이아웃
   - Learning Lab 스타일과 일관성 확보
   - 5개 feature 카드: Planner, Booking, Teachers, All-in-One, Premium

3. **디자인 시스템 통일**
   - 흰색 배경 + 파란색/보라색 액센트
   - Lucide 아이콘 사용
   - 둥근 카드 레이아웃
   - 부드러운 그림자 효과

#### 기술 스펙
- Tailwind CSS (CDN)
- Lucide Icons
- SPA 방식 (Hash-based routing)
- 반응형 디자인 (Mobile-first)

---

### v1.0 - 2026-01-26
**백업 파일**: `ability-english-full-v1-stable.html`

- 초기 버전
- About 페이지: 다크 테마
- 영어광장 메뉴 (구버전)

---

## 롤백 방법

문제가 발생했을 때 이전 버전으로 되돌리는 방법:

```powershell
# PowerShell에서 실행

# v2.0으로 롤백 (현재 안정 버전)
Copy-Item -Path "ability-english-full-backup-20260127-stable.html" -Destination "ability-english-full.html" -Force

# v1.0으로 롤백
Copy-Item -Path "ability-english-full-v1-stable.html" -Destination "ability-english-full.html" -Force
```

## 파일 구조

```
앤보임_스크립트/
├── ability-english-full.html                      # 현재 운영 파일
├── ability-english-full-backup-20260127-stable.html  # v2.0 백업
├── ability-english-full-v1-stable.html            # v1.0 백업
├── images/                                        # 이미지 리소스
│   ├── daily메뉴용/
│   ├── Business 메뉴용/
│   ├── intro/
│   ├── premium/
│   └── teachers/
└── data/                                          # 강사 데이터 (JSON)
```

## 다음 버전 계획 시 참고사항

1. 새 기능 추가 전 반드시 백업 생성:
   ```powershell
   Copy-Item "ability-english-full.html" "ability-english-full-backup-YYYYMMDD.html"
   ```

2. 버전 넘버링 규칙:
   - Major (v1, v2): 전체 디자인 개편 또는 메뉴 구조 변경
   - 날짜 백업: 안정적인 마일스톤마다 생성

3. 중요한 변경사항은 이 README에 기록
