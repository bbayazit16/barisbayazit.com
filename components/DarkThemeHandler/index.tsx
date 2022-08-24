import { useEffect, useState } from "react"

import Image from "next/image"

const DarkThemeHandler = () => {
    const [lightbulb, setLightBulb] = useState<string>("/dark/hanging_light.svg")

    const detectTheme = () => {
        if (localStorage.getItem("lightTheme")) {
            document.documentElement.classList.remove("dark")
            setLightBulb("/light/hanging_light.svg")
        } else {
            document.documentElement.classList.add("dark")
            setLightBulb("/dark/hanging_light.svg")
        }
    }

    const updateTheme = () => {
        localStorage.getItem("lightTheme")
            ? localStorage.removeItem("lightTheme")
            : localStorage.setItem("lightTheme", "1")
        detectTheme()
    }

    useEffect(detectTheme, [])

    return (
        <div className="hover:-translate-y-4 duration-500 cursor-pointer inline-flex select-none">
            <Image
                src={lightbulb}
                alt="Toggle Dark Mode"
                width={96}
                height={96}
                onClick={updateTheme}
            />
        </div>
    )
}

export default DarkThemeHandler
