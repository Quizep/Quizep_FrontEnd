import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="self-stretch pl-[100px] pr-[50px] py-3 bg-white/60 justify-between items-center inline-flex">
            <Link href={"/"}>
                <Image
                    src={"/images/logo.png"}
                    width={45}
                    height={45}
                    alt="logo"
                />
            </Link>
            <div className="justify-start items-center gap-5 flex">
                <Button
                    variant={"secondary"}
                    className="px-[15px] py-1.5 bg-white rounded-[10px] justify-center items-center gap-2.5 flex"
                    asChild
                >
                    <Link href={"/announcement"}>
                        <div className="text-center text-black text-2xl font-semibold">
                            공지사항
                        </div>
                    </Link>
                </Button>
                <Button
                    variant={"secondary"}
                    className="px-[15px] py-1.5 bg-white rounded-[10px] justify-center items-center gap-2.5 flex"
                    asChild
                >
                    <Link href={"/login"}>
                        <div className="text-center text-black text-2xl font-semibold">
                            로그인
                        </div>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
