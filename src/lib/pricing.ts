import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

export interface PricingData {
    과정명: string;
    주당횟수: string;
    시간: string;
    '1개월_가격': number;
    '3개월_가격': number;
    '6개월_가격'?: number;
}

/**
 * Read pricing data from Excel file
 * This function runs on the server side only
 */
export function getPricingData(): PricingData[] {
    const filePath = path.join(process.cwd(), 'public', 'data', 'prices.xlsx');

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        console.warn('prices.xlsx not found, returning sample data');
        return getSamplePricingData();
    }

    try {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json<PricingData>(worksheet);

        return jsonData;
    } catch (error) {
        console.error('Error reading Excel file:', error);
        return getSamplePricingData();
    }
}

/**
 * Sample pricing data for development
 */
function getSamplePricingData(): PricingData[] {
    return [
        { 과정명: '이머전', 주당횟수: '주2회', 시간: '25분', '1개월_가격': 240000, '3개월_가격': 648000 },
        { 과정명: '이머전', 주당횟수: '주3회', 시간: '25분', '1개월_가격': 360000, '3개월_가격': 972000 },
        { 과정명: '이머전', 주당횟수: '주2회', 시간: '50분', '1개월_가격': 360000, '3개월_가격': 972000 },
        { 과정명: '이머전', 주당횟수: '주3회', 시간: '50분', '1개월_가격': 540000, '3개월_가격': 1458000 },
        { 과정명: '앤시니어', 주당횟수: '주2회', 시간: '25분', '1개월_가격': 240000, '3개월_가격': 648000 },
        { 과정명: '앤시니어', 주당횟수: '주3회', 시간: '25분', '1개월_가격': 360000, '3개월_가격': 972000 },
        { 과정명: '모멘텀A', 주당횟수: '주2회', 시간: '25분', '1개월_가격': 220000, '3개월_가격': 594000 },
        { 과정명: '모멘텀A', 주당횟수: '주3회', 시간: '25분', '1개월_가격': 330000, '3개월_가격': 891000 },
        { 과정명: '토익스피킹', 주당횟수: '주2회', 시간: '50분', '1개월_가격': 400000, '3개월_가격': 1080000 },
        { 과정명: '토익스피킹', 주당횟수: '주3회', 시간: '50분', '1개월_가격': 600000, '3개월_가격': 1620000 },
    ];
}

/**
 * Calculate price based on selected options
 */
export function calculatePrice(
    data: PricingData[],
    course: string,
    frequency: string,
    duration: string,
    months: number
): number | null {
    const match = data.find(
        (item) =>
            item.과정명 === course &&
            item.주당횟수 === frequency &&
            item.시간 === duration
    );

    if (!match) return null;

    switch (months) {
        case 1:
            return match['1개월_가격'];
        case 3:
            return match['3개월_가격'];
        case 6:
            return match['6개월_가격'] || match['3개월_가격'] * 2;
        default:
            return null;
    }
}
