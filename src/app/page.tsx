import Link from "next/link"
import getPosts from "./lib/posts"

export default async function Home() {
    const posts = await getPosts()

    return (
        <main className="flex-grow flex flex-col p-8 h-full mb-auto mt-10 ml-[5%] mr-[5%] sm:ml-[12.5%] sm:mr-[12.5%] md:ml-[25%] md:mr-[25%]">
            <div className="flex flex-col space-y-4 mb-4">
                <p className="text-2xl font-bold" translate="no">
                    Barış Bayazıt&apos;s Website
                </p>
                <p className="text-md">Below you can find some of my blog posts.</p>
            </div>
            <div className="border-t-4 border-gray-400 dark:border-gray-600" />
            <br className="select-none" />
            <div className="flex flex-col space-y-8 ">
                {posts.map(
                    post =>
                        post.id.charAt(0) !== "_" && ( // _ => unlisted posts
                            <div key={post.id} className="flex flex-col">
                                <Link href={`/post/${post.id}`}>
                                    <span className="text-blue-400 underline text-md dark:text-blue-400 inline cursor-pointer">
                                        {post.title}
                                    </span>
                                </Link>
                                <span className="text-gray-700 dark:text-gray-400 text-sm">
                                    {post.date}
                                    {post.lastEdit && ` • ${post.lastEdit}`}
                                </span>
                            </div>
                        )
                )}
            </div>
        </main>
    )
}
