"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="h-full min-h-screen w-screen bg-[#7f47c7]/50 flex-col justify-start items-center gap-[147px] inline-flex">
            <Navbar />
            <form className="justify-center items-center gap-5 flex flex-col w-screen">
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        value={email}
                        onChange={(e) => {
                            setEmail(() => e.target.value);
                        }}
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="h-[45px] bg-[#58D76D] shadow border border-blacks"
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        value={password}
                        onChange={(e) => {
                            setPassword(() => e.target.value);
                        }}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="h-[45px] bg-[#58D76D] shadow border border-blacks"
                    />
                </div>

                <Button
                    variant={"secondary"}
                    className="w-[200px] h-[45px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex"
                >
                    <div className="text-center text-black text-2xl font-semibold">
                        로그인
                    </div>
                </Button>
            </form>
        </div>
    );
};

export default Login;
