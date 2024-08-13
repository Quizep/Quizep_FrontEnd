"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        nickname: "",
        sex: "",
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput((state) => {
            return { ...state, [e.target.id]: e.target.value };
        });
    };

    return (
        <div className="h-full min-h-screen w-screen bg-[#7f47c7]/50 flex-col justify-start items-center gap-[147px] inline-flex">
            <Navbar />
            <form className="justify-center items-center gap-5 flex flex-col w-screen">
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        value={input.email}
                        onChange={onChange}
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="h-[45px] bg-[#58D76D] shadow border border-blacks"
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        value={input.password}
                        onChange={onChange}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="h-[45px] bg-[#58D76D] shadow border border-blacks"
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                    <Label htmlFor="email">Nickname</Label>
                    <Input
                        value={input.nickname}
                        onChange={onChange}
                        type="text"
                        id="nickname"
                        placeholder="Nickname"
                        className="h-[45px] bg-[#58D76D] shadow border border-blacks"
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                    <Label htmlFor="email">gender</Label>
                    <Input
                        value={input.sex}
                        onChange={onChange}
                        type="text"
                        id="sex"
                        placeholder="Gender"
                        className="h-[45px] bg-[#58D76D] shadow border border-blacks"
                    />
                </div>

                <Button
                    variant={"secondary"}
                    className="w-[200px] h-[45px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex"
                >
                    <div className="text-center text-black text-3xl font-semibold">
                        회원가입
                    </div>
                </Button>
            </form>
        </div>
    );
};

export default Login;
