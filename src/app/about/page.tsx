import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Barış Bayazıt | About",
    description: "Barış Bayazıt - About me",
}

export default function About() {
    return (
        <main className="flex flex-grow flex-col p-8 h-full mb-auto mt-10 ml-[5%] mr-[5%] sm:ml-[12.5%] sm:mr-[12.5%] md:ml-[25%] md:mr-[25%]">
            <div>
                <div className="float-left mr-4 mt-4 p-2 select-none">
                    <Image height={128} width={128} src="/zeytin-square.png" alt="Profile photo" />
                </div>
                <div className="mt-4 gap-x-4">
                    <Link
                        href="/"
                        className="text-blue-400 underline text-sm select-none cursor-pointer"
                    >
                        Back to Home
                    </Link>
                    <div className="mt-2">
                        <p className="leading-6">
                            Hey! I&#x27;m Barış, a Computer Science student at University of
                            Toronto, St. George (Victoria College). I&apos;m interested in
                            programming language design & theory, compilers, distributed systems and
                            blockchains. My favourite programming language is Rust, although I can
                            also code in Python, C, Java, Javascript & Typescript, Solidity, and to
                            some extent, Go.
                            <br />
                            <br />
                            Fun fact: My name stands for &quot;peace&quot;.
                            {/* Old Description :) */}
                            {/* Hey! I&#x27;m Barış. My name stands for &quot;peace&quot;. I&#x27;m an
                            IB student studying Mathematics and Physics. My occupation is learning
                            and I love it. ight now I&#x27;m specifically interested in parsers and
                            lexers, virtual machines, managing Linux servers with API&#x27;s
                            I&#x27;ll probably never use, programming in Rust, and smart contracts.
                            Other things I like include cycling, traveling, mathematics and physics,
                            and cats. If you find my name hard to pronounce, just say
                            &quot;peace&quot;, because that&#x27;s literally what &quot;Barış&quot;
                            translates to! */}
                        </p>
                    </div>
                    <div className="flex flex-col mt-6 space-y-4">
                        <h2 className="text-2xl font-bold">Projects</h2>
                        <div className="flex flex-row mt-4">
                            <span>
                                <a
                                    className="text-blue-400 underline text-md inline cursor-pointer"
                                    href="https://showcase.ethglobal.com/ethamsterdam/democrazy-05bma"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Democrazy
                                </a>{" "}
                                Built with a team of 5 in ETHGlobal - Amsterdam. A finalist project
                                preserving privacy for off-chain voting.
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <span>
                                <a
                                    className="text-blue-400 underline text-md inline cursor-pointer"
                                    href="https://l2savings.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    L2Savings
                                </a>{" "}
                                See how much fees you&apos;ve saved by using Layer Twos!
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <span>
                                <a
                                    className="text-blue-400 underline text-md inline cursor-pointer"
                                    href="https://github.com/bbayazit16/ai-with-python-introduction-msb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    MySevAI Bootcamp 2021
                                </a>{" "}
                                An artificial intelligence bootcamp orgaized in collaboration with
                                other SEV schools and Koc University.
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <h2 className="font-bold text-xl">PGP 🔑</h2>
                        <span>{"Barış Bayazıt (barisbayazit.com) <bayazitbaris@gmail.com>"}</span>
                        <span className="hidden md:block">
                            Fingerprint:{" "}
                            <span className="font-bold">
                                DD395C05D6DBA510CBB9CDA9551E385D8D26CE23
                            </span>
                        </span>
                        <span className="block md:hidden">
                            Fingerprint:{" "}
                            <span className="md:hidden">
                                DD395C05D6 DBA510CBB9 CDA9551E38 5D8D26CE23
                            </span>
                        </span>
                        <div className="flex flex-row space-x-4">
                            <a
                                href="/DD395C05D6DBA510CBB9CDA9551E385D8D26CE23.asc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline text-md inline cursor-pointer"
                            >
                                Public Key
                            </a>
                            <a
                                href="https://keys.openpgp.org/vks/v1/by-fingerprint/DD395C05D6DBA510CBB9CDA9551E385D8D26CE23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline text-md inline cursor-pointer"
                            >
                                Public Key Mirror #1
                            </a>
                            <a
                                href="https://pgp.mit.edu/pks/lookup?op=get&search=0xDD395C05D6DBA510CBB9CDA9551E385D8D26CE23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline text-md inline cursor-pointer"
                            >
                                Public Key Mirror #2
                            </a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="font-bold text-xl">Contact</h2>
                        <div className="flex flex-row space-x-4">
                            <a
                                href="https://github.com/bbayazit16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline text-md inline cursor-pointer"
                            >
                                Github
                            </a>
                            <a
                                href="mailto:bayazitbaris@gmail.com"
                                className="text-blue-400 underline text-md inline cursor-pointer"
                            >
                                Mail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
