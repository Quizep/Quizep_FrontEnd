import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Home(param: {
    params: { id: string };
    searchParams: { p: string };
}) {
    console.log(param);
    return (
        <div className="w-screen h-full min-h-screen bg-[#7f47c7]/50 flex-col justify-start items-center gap-[50px] inline-flex">
            <Navbar />
            <div className="flex">
                <img
                    className="w-[247px] h-[234px]"
                    src="https://via.placeholder.com/247x234"
                />
                <img
                    className="w-[247px] h-[234px]"
                    src="https://via.placeholder.com/247x234"
                />
                <div className="text-center text-black/70 text-[50px] font-semibold">
                    7개 맞히셨습니다.
                </div>

                <div>
                    <div className="w-[450px] h-[100px] bg-[#152cff]">
                        <div className="text-center text-white text-[50px] font-semibold">
                            오늘의 퀴즈는 ?
                        </div>
                    </div>
                    <div className="w-[450px] h-[720px] bg-[#cacef3]" />
                </div>
            </div>
        </div>
    );
}
