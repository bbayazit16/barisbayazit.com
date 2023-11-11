"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkAnimationProps = {
    url: string
    text: string
}

export default function LinkAnimation({ url, text }: LinkAnimationProps) {
    const pathName = usePathname()

    return (
        <Link
            className="m-auto group rounded-md transition-all duration-100 ease-in-out px-4 py-2"
            href={url}
        >
            {text}
            <span
                className={`block transition-all duration-300 h-0.5 bg-black dark:bg-white ${
                    pathName === url ? "w-full" : "w-0"
                } ${pathName !== url ? "group-hover:w-2/3" : ""}`}
            ></span>
        </Link>
    )
}
