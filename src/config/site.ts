export const siteConfig = {
    name: "Ability English",
    description: "비대면 화상 영어 교육의 새로운 기준",
    url: "https://ability-english.com",
    ogImage: "https://ability-english.com/og.jpg",
    links: {
        enrollment: "/enrollment",
        levelTest: "/level-test",
    },
    mainNav: [
        {
            title: "어빌리티 잉글리시 소개",
            href: "/about",
            items: [
                { title: "About Ability English", href: "/about" },
                { title: "강사 소개", href: "/about/teachers" },
                { title: "강사 리스트", href: "/about/teachers/list" },
                { title: "수강 규정", href: "/about/rules" },
                { title: "학습 가이드", href: "/about/guide" },
                { title: "플래너", href: "/about/planner" },
                { title: "프리미엄 코스", href: "/about/premium" },
            ],
        },
        {
            title: "과정 소개",
            href: "/curriculum",
            items: [
                { title: "전체 과정맵", href: "/curriculum" },
                {
                    title: "정규통합",
                    href: "/curriculum/regular",
                    items: [
                        { title: "이머전", href: "/curriculum/regular/immersion" },
                        { title: "앤시니어", href: "/curriculum/regular/senior" },
                        { title: "행아웃", href: "/curriculum/regular/hangout" },
                    ],
                },
                {
                    title: "회화",
                    href: "/curriculum/conversation",
                    items: [
                        { title: "모멘텀 A", href: "/curriculum/conversation/momentum-a" },
                        { title: "앤라이프", href: "/curriculum/conversation/nlife" },
                        { title: "아이캔톡", href: "/curriculum/conversation/icantalk" },
                        { title: "데일리앤보임", href: "/curriculum/conversation/daily" },
                        { title: "EEA", href: "/curriculum/conversation/eea" },
                    ],
                },
                {
                    title: "비즈니스",
                    href: "/curriculum/business",
                    items: [
                        { title: "모멘텀 C", href: "/curriculum/business/momentum-c" },
                        { title: "CBE", href: "/curriculum/business/cbe" },
                    ],
                },
                {
                    title: "시험준비",
                    href: "/curriculum/test-prep",
                    items: [
                        { title: "토익스피킹 비기너", href: "/curriculum/test-prep/toeic-speaking-beginner" },
                        { title: "토익스피킹 실전", href: "/curriculum/test-prep/toeic-speaking" },
                        { title: "오픽", href: "/curriculum/test-prep/opic" },
                        { title: "모멘텀 B", href: "/curriculum/test-prep/momentum-b" },
                    ],
                },
                {
                    title: "시사&역사",
                    href: "/curriculum/current-affairs",
                    items: [
                        { title: "앤타임즈", href: "/curriculum/current-affairs/ntimes" },
                        { title: "케이히스토리", href: "/curriculum/current-affairs/k-history" },
                    ],
                },
                {
                    title: "문법/어휘",
                    href: "/curriculum/grammar",
                    items: [
                        { title: "그래머앤", href: "/curriculum/grammar/grammar-n" },
                        { title: "그래머포인츠", href: "/curriculum/grammar/grammar-points" },
                        { title: "앤보카", href: "/curriculum/grammar/nvoca" },
                    ],
                },
                { title: "여행", href: "/curriculum/travel/funfun-trip" },
                {
                    title: "프리미엄",
                    href: "/curriculum/premium",
                    items: [
                        { title: "말하기", href: "/curriculum/premium/speaking" },
                        { title: "읽기", href: "/curriculum/premium/reading" },
                        { title: "문법", href: "/curriculum/premium/grammar" },
                        { title: "교과과목", href: "/curriculum/premium/school-subjects" },
                        { title: "쓰기", href: "/curriculum/premium/writing" },
                    ],
                },
            ],
        },
        {
            title: "레벨테스트",
            href: "/level-test",
            items: [
                { title: "안내", href: "/level-test" },
                { title: "신청", href: "/level-test/apply" },
                { title: "AI 테스트", href: "/level-test/ai" },
            ],
        },
        {
            title: "영어광장",
            href: "/plaza",
            items: [
                { title: "데일리", href: "/plaza/daily" },
                { title: "비즈니스", href: "/plaza/business" },
                { title: "빅박스", href: "/plaza/bigbox" },
            ],
        },
        {
            title: "고객센터",
            href: "/support",
            items: [{ title: "1:1 문의", href: "/support/inquiry" }],
        },
    ],
};

export type SiteConfig = typeof siteConfig;
