import getPosts from "./lib/posts"

export default async function sitemap() {
    const posts = await getPosts()

    const blogs = posts.map(post => ({
        url: `https://barisbayazit.com/post/${post.id}`,
        lastModified: new Date(post.lastEdit).toISOString().split("T")[0],
    }))

    const routes = ["", "about"].map(route => ({
        url: `https://barisbayazit.com/${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }))

    return [...routes, ...blogs]
}
