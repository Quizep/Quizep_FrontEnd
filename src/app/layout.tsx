import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Quizep",
    description: "Make Quiz and resolve Quiz!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={noto.className}>{children}</body>
        </html>
    );
}
