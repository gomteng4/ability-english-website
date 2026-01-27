export default function AboutPage() {
    return (
        <div className="container px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
                    About Ability English
                </h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">비대면 화상 수업이 더 효과적인 이유</h2>
                    <div className="prose prose-neutral max-w-none">
                        <p className="text-lg text-muted-foreground mb-4">
                            많은 분들이 대면 수업이 더 효과적이라고 생각하지만, 실제로는 비대면 화상 수업이 언어 학습에 더 유리합니다.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">1. 완벽한 1:1 집중 환경</h3>
                        <p className="text-muted-foreground mb-4">
                            학원 수업은 여러 학생이 함께하기 때문에 개인별 말하기 시간이 제한적입니다.
                            비대면 화상 수업은 온전히 1:1로 진행되어 50분 내내 선생님의 집중적인 피드백을 받을 수 있습니다.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">2. 시간과 장소의 제약 없음</h3>
                        <p className="text-muted-foreground mb-4">
                            출퇴근 시간을 절약하고, 집이나 사무실 등 편안한 환경에서 수업을 들을 수 있습니다.
                            이동 시간이 없어 바쁜 직장인도 꾸준히 학습할 수 있습니다.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3. 개인 맞춤 커리큘럼</h3>
                        <p className="text-muted-foreground mb-4">
                            학습자의 수준과 목표에 완벽하게 맞춘 커리큘럼으로 효율적인 학습이 가능합니다.
                            실력 향상 속도가 대면 수업 대비 평균 2배 빠릅니다.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4. 합리적인 가격</h3>
                        <p className="text-muted-foreground">
                            학원 운영비(임대료, 관리비 등)가 없어 동일한 품질의 수업을 30% 저렴한 가격에 제공할 수 있습니다.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Ability English의 특징</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="border rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">검증된 원어민 강사</h3>
                            <p className="text-sm text-muted-foreground">
                                TESOL, TEFL 자격증을 보유한 경력 5년 이상의 원어민 강사진
                            </p>
                        </div>
                        <div className="border rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">체계적인 커리큘럼</h3>
                            <p className="text-sm text-muted-foreground">
                                초급부터 고급까지 단계별로 설계된 30개 이상의 다양한 과정
                            </p>
                        </div>
                        <div className="border rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">유연한 스케줄</h3>
                            <p className="text-sm text-muted-foreground">
                                강사와 직접 조율하여 원하는 시간에 자유롭게 수업 예약
                            </p>
                        </div>
                        <div className="border rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">학습 관리 시스템</h3>
                            <p className="text-sm text-muted-foreground">
                                수업 후 즉시 제공되는 피드백과 진도 관리로 체계적인 학습
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
