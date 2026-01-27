import { getPricingData } from "@/lib/pricing";
import { PricingCalculator } from "@/components/pricing-calculator";

export const metadata = {
    title: "수강료 확인 및 신청 - Ability English",
    description: "과정별 수강료를 확인하고 바로 신청하세요.",
};

export default function EnrollmentPage() {
    const pricingData = getPricingData();

    return (
        <div className="container px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        수강료 확인 및 신청
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        원하시는 과정과 옵션을 선택하시면 실시간으로 수강료가 계산됩니다.
                    </p>
                </div>

                <PricingCalculator pricingData={pricingData} />

                <div className="mt-12 bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">수강 안내</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 모든 수업은 1:1 화상 수업으로 진행됩니다.</li>
                        <li>• 3개월 이상 등록 시 할인 혜택이 적용됩니다.</li>
                        <li>• 수업 시간은 강사와 협의하여 자유롭게 조정 가능합니다.</li>
                        <li>• 결제 후 24시간 이내 무료 취소가 가능합니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
