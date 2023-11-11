import { readFileSync, existsSync } from "fs"
import { notFound } from "next/navigation"

import Link from "next/link"
import matter from "gray-matter"

import mdIt from "@/app/lib/markdown"

type Post = {
    title: string
    date: string
    lastEdit: string
    contents: string
}

export default function Post({ params }: { params: { id: string } }) {
    if (!existsSync(`./posts/${params.id}.md`)) return notFound()

    const { data: context, content } = matter(readFileSync(`./posts/${params.id}.md`, "utf8"))

    const { title, date, lastEdit } = context
    const contents = mdIt.render(content)

    return (
        <main className="flex flex-grow flex-col overflow-scroll space-y-2 p-8 h-full mb-auto mt-10 md:mt-16 ml-[5%] mr-[5%] sm:ml-[12.5%] sm:mr-[12.5%] md:ml-[25%] md:mr-[25%]">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex flex-row">
                <Link
                    href="/"
                    className="text-blue-400 underline text-sm select-none cursor-pointer"
                >
                    Back to Home
                </Link>
                <span className="text-gray-700 dark:text-gray-400 text-sm ml-2">
                    {date}
                    {lastEdit && ` • ${lastEdit}`}
                </span>
            </div>
            <br className="select-none" />
            <article className="prose" dangerouslySetInnerHTML={{ __html: contents }} />
        </main>
    )
}
