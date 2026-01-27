import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2026 Ability English. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="/about"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        회사소개
                    </Link>
                    <Link
                        href="/support/inquiry"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        고객센터
                    </Link>
                    <Link
                        href="/about/rules"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        이용약관
                    </Link>
                </div>
            </div>
        </footer>
    );
}
