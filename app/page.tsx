import { getSortedArticles } from "./lib/articles"
import Link from "next/link"
import Date from "@/components/date";

export default function Home() {
  
  const allArticlesData = getSortedArticles();

  return (
    <div className="text-center pt-12">
      <h1 className="text-4xl mb-6 font-playfair font-bold">Welcome to my blog</h1>

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

  
  )
}
