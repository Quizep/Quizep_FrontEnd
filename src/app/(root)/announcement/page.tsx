import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div className="h-full min-h-screen w-screen bg-[#7f47c7]/50 flex-col justify-start items-center gap-[40px] inline-flex ">
            <Navbar />
            <div className="w-[1340px] h-[630px] relative bg-white">
                <div className="left-[311px] top-[189px] absolute text-center text-black text-3xl font-semibold">
                    이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는 앱입니다.
                    <br />
                    이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는 앱입니다.
                    <br />
                    이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는 앱입니다.
                    <br />
                    이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는 앱입니다.
                    <br />
                    이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는 앱입니다.
                    <br />
                    이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는 앱입니다.
                    <br /> 이퀴즈 앱은 모든 사람이 즐겁게 이용할 수 있는
                    앱입니다.
                </div>
                <div className="left-[38px] top-[28px] absolute text-center text-black text-[90px] font-semibold">
                    공지사항
                </div>
            </div>
        </div>
    );
}
