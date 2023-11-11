import { readFileSync, readdirSync } from "fs"
import { cache } from "react"

import matter from "gray-matter"

const getPosts = cache(async () => {
    const postsDir = process.cwd() + "/posts"
    return readdirSync(postsDir).map(article => {
        const { data: context } = matter(readFileSync(`./posts/${article}`, "utf8"))
        return {
            title: context.title,
            id: article.replace(".md", ""),
            date: context.date,
            lastEdit: context.lastEdit,
        } as PostContext
    })
})

export default getPosts
