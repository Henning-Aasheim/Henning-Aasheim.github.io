import { getSortedArticles } from "../lib/articles";
import Date from "@/components/date";
import Link from "next/link";

export default function BlogPage() {

    const allArticlesData = getSortedArticles();

    return (
        <div className="text-center pt-12 w-2/3 mx-auto">
            <h1 className="text-3xl font-bold mb-8 font-playfair">Blog</h1>

            <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto">
                {allArticlesData.map((article) => (
                    <article key={article.id} className="group ">
                        <div className="flex justify-center">
                            <Link href={`/blog/${article.id}`}>
                                <h2 className="text-2xl font-playfair font-semibold text-center">{article.title}</h2>
                                <div className="font-playfair-sc text-black/70"><Date dateString={article.date} /></div>
                            </Link>
                        </div>
                    </article>
        ))}
      </div>

        </div>
    );
}