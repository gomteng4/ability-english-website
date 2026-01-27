// 현재 페이지의 위치를 파악하여 경로 prefix 결정
const isRootPage = window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/ability-english/');
const pathPrefix = isRootPage ? '' : '../';

// 공통 헤더 HTML
const headerHTML = `
<header class="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
    <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
            <div class="flex items-center gap-8">
                <a href="${pathPrefix}index.html" class="text-2xl font-bold text-blue-600">어빌리티 잉글리시</a>
                <nav class="hidden lg:flex gap-1">
                    <!-- 앤보임 소개 -->
                    <div class="dropdown relative">
                        <button class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                            앤보임 소개 ▼
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg">
                            <a href="${pathPrefix}about/about-nvoim.html" class="block px-4 py-2 hover:bg-gray-50">About Nvoim</a>
                            <a href="${pathPrefix}about/teachers.html" class="block px-4 py-2 hover:bg-gray-50">강사 소개</a>
                            <a href="${pathPrefix}about/teacher-list.html" class="block px-4 py-2 hover:bg-gray-50">강사리스트</a>
                            <a href="${pathPrefix}about/rules.html" class="block px-4 py-2 hover:bg-gray-50">수강규정</a>
                            <a href="${pathPrefix}about/guide.html" class="block px-4 py-2 hover:bg-gray-50">학습 가이드</a>
                            <a href="${pathPrefix}about/planner.html" class="block px-4 py-2 hover:bg-gray-50">플래너</a>
                            <a href="${pathPrefix}about/premium-course.html" class="block px-4 py-2 hover:bg-gray-50">프리미엄 코스</a>
                        </div>
                    </div>

                    <!-- 과정소개 -->
                    <div class="dropdown relative">
                        <button class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                            과정소개 ▼
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-1 w-56 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
                            <a href="${pathPrefix}curriculum/all.html" class="block px-4 py-2 hover:bg-gray-50 font-semibold">전체 과정맵</a>
                            <div class="border-t my-1"></div>
                            <div class="px-4 py-1 text-xs text-gray-500 font-semibold">정규통합과정</div>
                            <a href="${pathPrefix}curriculum/immersion.html" class="block px-4 py-2 hover:bg-gray-50">이머전</a>
                            <a href="${pathPrefix}curriculum/senior.html" class="block px-4 py-2 hover:bg-gray-50">앤시니어</a>
                            <a href="${pathPrefix}curriculum/hangout.html" class="block px-4 py-2 hover:bg-gray-50">행아웃</a>
                            <div class="border-t my-1"></div>
                            <div class="px-4 py-1 text-xs text-gray-500 font-semibold">회화</div>
                            <a href="${pathPrefix}curriculum/momentum-a.html" class="block px-4 py-2 hover:bg-gray-50">모멘텀 A</a>
                            <a href="${pathPrefix}curriculum/nlife.html" class="block px-4 py-2 hover:bg-gray-50">앤라이프</a>
                            <a href="${pathPrefix}curriculum/icantalk.html" class="block px-4 py-2 hover:bg-gray-50">아이캔톡</a>
                            <a href="${pathPrefix}curriculum/daily.html" class="block px-4 py-2 hover:bg-gray-50">데일리앤보임</a>
                            <a href="${pathPrefix}curriculum/eea.html" class="block px-4 py-2 hover:bg-gray-50">EEA</a>
                            <div class="border-t my-1"></div>
                            <div class="px-4 py-1 text-xs text-gray-500 font-semibold">비즈니스</div>
                            <a href="${pathPrefix}curriculum/momentum-c.html" class="block px-4 py-2 hover:bg-gray-50">모멘텀C</a>
                            <a href="${pathPrefix}curriculum/cbe.html" class="block px-4 py-2 hover:bg-gray-50">CBE</a>
                            <div class="border-t my-1"></div>
                            <div class="px-4 py-1 text-xs text-gray-500 font-semibold">시험준비</div>
                            <a href="${pathPrefix}curriculum/toeic-beginner.html" class="block px-4 py-2 hover:bg-gray-50">토익스피킹 비기너</a>
                            <a href="${pathPrefix}curriculum/toeic.html" class="block px-4 py-2 hover:bg-gray-50">토익스피킹</a>
                            <a href="${pathPrefix}curriculum/opic.html" class="block px-4 py-2 hover:bg-gray-50">오픽</a>
                            <a href="${pathPrefix}curriculum/momentum-b.html" class="block px-4 py-2 hover:bg-gray-50">모멘텀B</a>
                            <div class="border-t my-1"></div>
                            <div class="px-4 py-1 text-xs text-gray-500 font-semibold">프리미엄앤보임</div>
                            <a href="${pathPrefix}curriculum/premium-speaking.html" class="block px-4 py-2 hover:bg-gray-50">말하기</a>
                            <a href="${pathPrefix}curriculum/premium-reading.html" class="block px-4 py-2 hover:bg-gray-50">읽기</a>
                            <a href="${pathPrefix}curriculum/premium-grammar.html" class="block px-4 py-2 hover:bg-gray-50">문법</a>
                            <a href="${pathPrefix}curriculum/premium-writing.html" class="block px-4 py-2 hover:bg-gray-50">쓰기</a>
                        </div>
                    </div>

                    <!-- 레벨테스트 -->
                    <div class="dropdown relative">
                        <button class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                            레벨테스트 ▼
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg">
                            <a href="${pathPrefix}level-test/info.html" class="block px-4 py-2 hover:bg-gray-50">레벨테스트 안내</a>
                            <a href="${pathPrefix}level-test/apply.html" class="block px-4 py-2 hover:bg-gray-50">레벨테스트 신청</a>
                            <a href="${pathPrefix}level-test/ai.html" class="block px-4 py-2 hover:bg-gray-50">AI 레벨테스트</a>
                        </div>
                    </div>

                    <!-- 영어광장 -->
                    <div class="dropdown relative">
                        <button class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                            영어광장 ▼
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg">
                            <a href="${pathPrefix}plaza/daily.html" class="block px-4 py-2 hover:bg-gray-50">데일리 앤보임</a>
                            <a href="${pathPrefix}plaza/business.html" class="block px-4 py-2 hover:bg-gray-50">비즈니스 앤보임</a>
                            <a href="${pathPrefix}plaza/bigbox.html" class="block px-4 py-2 hover:bg-gray-50">앤보임빅박스</a>
                        </div>
                    </div>

                    <!-- 고객센터 -->
                    <div class="dropdown relative">
                        <button class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                            고객센터 ▼
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-1 w-40 bg-white border rounded-lg shadow-lg">
                            <a href="${pathPrefix}contact.html" class="block px-4 py-2 hover:bg-gray-50">1:1 문의하기</a>
                        </div>
                    </div>
                </nav>
            </div>
            <a href="${pathPrefix}enrollment.html" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
                수강료 알아보기
            </a>
        </div>
    </div>
</header>
`;

// 공통 푸터 HTML
const footerHTML = `
<footer class="border-t py-10 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-sm text-gray-600">© 2026 어빌리티 잉글리시 (Ability English). All rights reserved.</p>
            <div class="flex gap-6">
                <a href="${pathPrefix}about/about-nvoim.html" class="text-sm text-gray-600 hover:text-blue-600">회사소개</a>
                <a href="${pathPrefix}contact.html" class="text-sm text-gray-600 hover:text-blue-600">고객센터</a>
                <a href="${pathPrefix}about/rules.html" class="text-sm text-gray-600 hover:text-blue-600">이용약관</a>
            </div>
        </div>
    </div>
</footer>
`;

// 페이지 로드 시 헤더와 푸터 삽입
document.addEventListener('DOMContentLoaded', function () {
    // 헤더 삽입
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // 푸터 삽입
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
