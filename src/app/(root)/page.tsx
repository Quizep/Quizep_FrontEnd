import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Home() {
    return (
        <div className="w-screen h-full min-h-screen bg-[#7f47c7]/50 flex-col justify-start items-center gap-[50px] inline-flex">
            <Navbar />
            <div className="w-[1263px] h-[45px] relative">
                <div className="w-[45px] h-[45px] left-0 top-0 absolute bg-[#cc4949] rounded-full" />
                <div className="w-[1205px] h-[45px] left-[58px] top-0 absolute">
                    <div className="w-[1200px] h-[45px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[20px]" />
                    <div className="w-[60px] h-[45px] left-[1145px] top-0 absolute bg-[#152cff] rounded-[200px]" />
                    <div className="w-5 h-5 left-[1162px] top-[11px] absolute rounded-full shadow border border-black" />
                    <div className="w-3 h-[0px] left-[1188.84px] top-[34.10px] absolute origin-top-left rotate-[-140deg] border border-black"></div>
                </div>
            </div>
            <div className="w-[1110px] grid grid-cols-4 gap-y-10 mb-20">
                {data.map((value, i) => (
                    <Link
                        href={"/detail/" + (i + 1)}
                        key={i}
                        className="w-[235px] h-72 bg-white rounded-[5px] shadow flex-col justify-start items-center inline-flex"
                    >
                        <img
                            className="self-stretch h-[180px] rounded-[5px]"
                            src="/images/ryu.png"
                        />
                        <div className="self-stretch h-[108px] p-2 flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-center text-black text-[15px] font-medium">
                                무료료 해주길 원하는 동하(19)
                            </div>
                            <div className="text-neutral-500 text-[11px] font-normal leading-4 text-ellipsis h-[51px] overflow-hidden">
                                이 류동하는 무료료 해주길 원합니다 지금당장
                                회원가입하여 무료료 류동하를 맛봐보세요 지금
                                무료료 헐떡이는 19세 학생을 맛봐볼수있습니다
                                하기전에 무료료 해보자!이 류동하는 무료료 해주길
                                원합니다 지금당장 회원가입하여 무료료 류동하를
                                맛봐보세요 지금 무료료 헐떡이는 19세 학생을
                                맛봐볼수있습니다 하기전에 무료료 해보자!
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
