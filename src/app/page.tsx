import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Video, Clock, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            비대면 화상 수업,
            <br />
            <span className="text-primary">더 효과적입니다</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            대면 수업보다 집중도가 높고, 시간과 장소의 제약이 없으며, 1:1 맞춤 학습으로 더 빠른 성장을 경험하세요.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/enrollment">수강료 알아보기</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="/level-test">무료 레벨테스트</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t bg-muted/50 py-16">
        <div className="container px-4">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
            왜 비대면 화상 수업인가요?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Video className="h-10 w-10 text-primary mb-2" />
                <CardTitle>1:1 집중 학습</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  그룹 수업의 산만함 없이 온전히 선생님과 1:1로 집중하여 말하기 실력을 극대화합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>시간 & 장소 자유</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  출퇴근 시간 절약, 집이나 사무실 어디서나 편안한 환경에서 수업을 진행할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>빠른 실력 향상</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  개인 맞춤 커리큘럼과 즉각적인 피드백으로 대면 수업 대비 2배 빠른 성장을 경험하세요.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>합리적인 가격</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  학원 운영비가 없어 동일한 품질의 수업을 30% 저렴한 가격에 제공합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="container px-4 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          다양한 맞춤 과정
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>정규통합 과정</CardTitle>
              <CardDescription>이머전, 앤시니어, 행아웃</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                기초부터 고급까지 체계적인 단계별 학습
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/curriculum/regular">자세히 보기</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>비즈니스 & 시험준비</CardTitle>
              <CardDescription>토익스피킹, 오픽, 비즈니스 영어</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                목표 점수 달성과 실무 영어 능력 향상
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/curriculum/test-prep">자세히 보기</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>프리미엄 과정</CardTitle>
              <CardDescription>말하기, 읽기, 쓰기, 문법</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                4대 영역 집중 강화 프로그램
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/curriculum/premium">자세히 보기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary text-primary-foreground py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto max-w-[600px] text-lg mb-8 opacity-90">
            무료 레벨테스트로 나에게 맞는 과정을 찾고, 효과적인 비대면 학습을 경험하세요.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/level-test">무료 레벨테스트</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/enrollment">수강료 확인하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
