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
            <div className="h-[499px] p-5 bg-[#c6bebe] justify-center items-center inline-flex">
                <Image
                    className="rounded-[5px]"
                    src="/images/exam.png"
                    alt="main"
                    width={447}
                    height={459}
                />
            </div>

            <div className="flex items-center gap-10">
                <Input
                    placeholder={"정답 입력"}
                    className="w-[700px] h-[70px]"
                />
                <button>
                    <Image
                        src={"/images/btn.png"}
                        alt="btn"
                        width={70}
                        height={70}
                    />
                </button>
            </div>
        </div>
    );
}
