"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PricingData } from "@/lib/pricing";

interface PricingCalculatorProps {
    pricingData: PricingData[];
}

export function PricingCalculator({ pricingData }: PricingCalculatorProps) {
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [selectedFrequency, setSelectedFrequency] = useState<string>("");
    const [selectedDuration, setSelectedDuration] = useState<string>("");
    const [selectedMonths, setSelectedMonths] = useState<number>(1);
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

    // Extract unique values for dropdowns
    const courses = Array.from(new Set(pricingData.map((item) => item.과정명)));
    const frequencies = Array.from(new Set(pricingData.map((item) => item.주당횟수)));
    const durations = Array.from(new Set(pricingData.map((item) => item.시간)));

    useEffect(() => {
        if (selectedCourse && selectedFrequency && selectedDuration && selectedMonths) {
            const match = pricingData.find(
                (item) =>
                    item.과정명 === selectedCourse &&
                    item.주당횟수 === selectedFrequency &&
                    item.시간 === selectedDuration
            );

            if (match) {
                let price: number | null = null;
                switch (selectedMonths) {
                    case 1:
                        price = match['1개월_가격'];
                        break;
                    case 3:
                        price = match['3개월_가격'];
                        break;
                    case 6:
                        price = match['6개월_가격'] || match['3개월_가격'] * 2;
                        break;
                }
                setCalculatedPrice(price);
            } else {
                setCalculatedPrice(null);
            }
        }
    }, [selectedCourse, selectedFrequency, selectedDuration, selectedMonths, pricingData]);

    const handleEnrollment = () => {
        alert(`수강 신청이 완료되었습니다!\n과정: ${selectedCourse}\n주당 횟수: ${selectedFrequency}\n시간: ${selectedDuration}\n개월 수: ${selectedMonths}개월\n총 금액: ${calculatedPrice?.toLocaleString()}원`);
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>수강료 계산기</CardTitle>
                <CardDescription>
                    원하시는 과정과 옵션을 선택하시면 자동으로 수강료가 계산됩니다.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Course Selection */}
                <div>
                    <label className="block text-sm font-medium mb-2">과정 선택</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {courses.map((course) => (
                            <Button
                                key={course}
                                variant={selectedCourse === course ? "default" : "outline"}
                                onClick={() => setSelectedCourse(course)}
                                className="w-full"
                            >
                                {course}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Frequency Selection */}
                <div>
                    <label className="block text-sm font-medium mb-2">주당 횟수</label>
                    <div className="grid grid-cols-2 gap-2">
                        {frequencies.map((freq) => (
                            <Button
                                key={freq}
                                variant={selectedFrequency === freq ? "default" : "outline"}
                                onClick={() => setSelectedFrequency(freq)}
                                className="w-full"
                            >
                                {freq}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Duration Selection */}
                <div>
                    <label className="block text-sm font-medium mb-2">수업 시간</label>
                    <div className="grid grid-cols-2 gap-2">
                        {durations.map((duration) => (
                            <Button
                                key={duration}
                                variant={selectedDuration === duration ? "default" : "outline"}
                                onClick={() => setSelectedDuration(duration)}
                                className="w-full"
                            >
                                {duration}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Months Selection */}
                <div>
                    <label className="block text-sm font-medium mb-2">수강 기간</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 3, 6].map((months) => (
                            <Button
                                key={months}
                                variant={selectedMonths === months ? "default" : "outline"}
                                onClick={() => setSelectedMonths(months)}
                                className="w-full"
                            >
                                {months}개월
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Price Display */}
                {calculatedPrice !== null && (
                    <div className="bg-primary/10 rounded-lg p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">총 수강료</p>
                        <p className="text-4xl font-bold text-primary">
                            {calculatedPrice.toLocaleString()}원
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                            {selectedMonths}개월 기준 ({selectedFrequency} {selectedDuration})
                        </p>
                    </div>
                )}

                {/* Enrollment Button */}
                <Button
                    onClick={handleEnrollment}
                    size="lg"
                    className="w-full"
                    disabled={calculatedPrice === null}
                >
                    수강 신청하기
                </Button>
            </CardContent>
        </Card>
    );
}
