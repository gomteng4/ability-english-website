import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "과정 소개 - Ability English",
    description: "다양한 레벨과 목적에 맞는 영어 학습 과정을 확인하세요.",
};

const curriculumCategories = [
    {
        title: "정규통합 과정",
        slug: "regular",
        description: "기초부터 고급까지 체계적인 단계별 학습",
        courses: [
            { name: "이머전", slug: "immersion", description: "영어 첫 걸음부터 토론까지 통합 과정" },
            { name: "앤시니어", slug: "senior", description: "성인 학습자를 위한 단계별 실력 향상" },
            { name: "행아웃", slug: "hangout", description: "실생활 회화 집중 과정" },
        ],
    },
    {
        title: "회화 과정",
        slug: "conversation",
        description: "실용적인 영어 회화 능력 향상",
        courses: [
            { name: "모멘텀 A", slug: "momentum-a", description: "기초 회화 마스터" },
            { name: "앤라이프", slug: "nlife", description: "일상 생활 표현 학습" },
            { name: "아이캔톡", slug: "icantalk", description: "자신감 있는 말하기" },
            { name: "데일리앤보임", slug: "daily", description: "매일 쓰는 실용 표현" },
            { name: "EEA", slug: "eea", description: "영어 표현력 향상" },
        ],
    },
    {
        title: "비즈니스 과정",
        slug: "business",
        description: "직장에서 필요한 실무 영어",
        courses: [
            { name: "모멘텀 C", slug: "momentum-c", description: "비즈니스 영어 기초" },
            { name: "CBE", slug: "cbe", description: "고급 비즈니스 커뮤니케이션" },
        ],
    },
    {
        title: "시험준비 과정",
        slug: "test-prep",
        description: "목표 점수 달성을 위한 집중 학습",
        courses: [
            { name: "토익스피킹 비기너", slug: "toeic-speaking-beginner", description: "토익스피킹 기초 다지기" },
            { name: "토익스피킹 실전", slug: "toeic-speaking", description: "고득점 전략 마스터" },
            { name: "오픽", slug: "opic", description: "오픽 AL/IH 목표 달성" },
            { name: "모멘텀 B", slug: "momentum-b", description: "말하기 시험 대비" },
        ],
    },
    {
        title: "프리미엄 과정",
        slug: "premium",
        description: "4대 영역 집중 강화",
        courses: [
            { name: "말하기", slug: "speaking", description: "스피킹 능력 극대화" },
            { name: "읽기", slug: "reading", description: "독해력 향상" },
            { name: "문법", slug: "grammar", description: "문법 완벽 마스터" },
            { name: "쓰기", slug: "writing", description: "영작 실력 향상" },
            { name: "교과과목", slug: "school-subjects", description: "학교 과목 영어" },
        ],
    },
];

export default function CurriculumPage() {
    return (
        <div className="container px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        과정 소개
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        목적과 레벨에 맞는 다양한 과정으로 효과적인 영어 학습을 시작하세요.
                    </p>
                </div>

                <div className="space-y-12">
                    {curriculumCategories.map((category) => (
                        <section key={category.slug}>
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                                <p className="text-muted-foreground">{category.description}</p>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {category.courses.map((course) => (
                                    <Card key={course.slug} className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <CardTitle>{course.name}</CardTitle>
                                            <CardDescription>{course.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button asChild variant="outline" className="w-full">
                                                <Link href={`/curriculum/${category.slug}/${course.slug}`}>
                                                    자세히 보기
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">어떤 과정이 나에게 맞을까요?</h3>
                    <p className="mb-6">무료 레벨테스트로 정확한 수준 파악과 맞춤 과정 추천을 받아보세요.</p>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/level-test">무료 레벨테스트</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
