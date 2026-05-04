import { getSortedArticles } from "../lib/articles";
import Date from "@/components/date";
import Link from "next/link";

export default function BlogPage() {

    const allArticlesData = getSortedArticles();

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl font-bold mb-8 font-playfair">Blog</h1>

            <div className="grid gap-8">
                {allArticlesData.map((article) => (
                    <article key={article.id} className="group">
                    <Link href={`/blog/${article.id}`}>
                        <h2 className="text-2xl font-playfair font-semibold">{article.title}</h2>
                        <br />
                        <Date dateString={article.date} />
                    </Link>
          </article>
        ))}
      </div>

        </div>
    );
}