import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CoursePageProps {
    params: {
        category: string;
        slug: string;
    };
}

// This function loads local images from public/images/curriculum/[course]
function getCourseImages(category: string, slug: string): string[] {
    const imagesDir = path.join(process.cwd(), 'public', 'images', 'curriculum', category, slug);

    if (!fs.existsSync(imagesDir)) {
        return [];
    }

    const files = fs.readdirSync(imagesDir);
    return files
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map((file) => `/images/curriculum/${category}/${slug}/${file}`);
}

// Sample course data - replace with actual data from crawled content
function getCourseData(category: string, slug: string) {
    // This would typically load from JSON files created by the crawler
    // For now, return placeholder data
    return {
        title: slug.replace(/-/g, ' ').toUpperCase(),
        description: '효과적인 영어 학습을 위한 맞춤 과정입니다.',
        content: `
      **비대면 화상 수업의 장점**
      
      이 과정은 비대면 화상 수업으로 진행되어 다음과 같은 장점이 있습니다:
      - 1:1 집중 학습으로 개인별 맞춤 피드백
      - 시간과 장소의 제약 없이 편리한 학습
      - 대면 수업 대비 2배 빠른 실력 향상
      - 학원 운영비가 없어 30% 저렴한 가격
      
      **과정 특징**
      
      체계적인 커리큘럼과 검증된 강사진으로 효과적인 학습을 제공합니다.
    `,
    };
}

export default function CoursePage({ params }: CoursePageProps) {
    const { category, slug } = params;
    const courseData = getCourseData(category, slug);
    const images = getCourseImages(category, slug);

    if (!courseData) {
        notFound();
    }

    return (
        <div className="container px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                    {courseData.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    {courseData.description}
                </p>

                {/* Course Images */}
                {images.length > 0 && (
                    <div className="mb-12 grid gap-4 md:grid-cols-2">
                        {images.map((imagePath, index) => (
                            <div key={index} className="relative aspect-video rounded-lg overflow-hidden border">
                                <Image
                                    src={imagePath}
                                    alt={`${courseData.title} - Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Course Content */}
                <div className="prose prose-neutral max-w-none mb-12">
                    <div dangerouslySetInnerHTML={{ __html: courseData.content.replace(/\n/g, '<br />') }} />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="flex-1">
                        <Link href="/enrollment">이 과정 수강 신청</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="flex-1">
                        <Link href="/level-test">레벨테스트 받기</Link>
                    </Button>
                </div>

                {/* Note about local images */}
                {images.length === 0 && (
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            💡 이미지를 추가하려면 <code>public/images/curriculum/{category}/{slug}/</code> 폴더에 이미지 파일을 넣어주세요.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
