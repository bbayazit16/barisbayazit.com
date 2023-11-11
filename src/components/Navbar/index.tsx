import LightBulb from "./lightbulb"
import LinkAnimation from "./linkanimation"

export default function Navbar() {
    return (
        <nav className="flex mx-4 px-12 space-x-4 select-none">
            <LightBulb />
            <div className="w-full flex justify-end items-center space-x-8 sm:ml-[5%] sm:mr-[5%] md:ml-[15%] md:mr-[15%]">
                <div className="flex-grow"></div> {/* A nice hack :) */}
                <LinkAnimation url="/" text="Home" />
                <LinkAnimation url="/about" text="About Me" />
            </div>
        </nav>
    )
}
