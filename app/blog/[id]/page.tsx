import { getArticleData, getAllArticleIds } from "@/app/lib/articles";


export default async function Article({ params }: { params: {id: string} }) {
    const articleContent = await getArticleData(params.id)
    
    return (
        <section className="flex mx-auto">
            <h1 className="text-4xl font-playfair font-bold">{articleContent.id}</h1>
            <article dangerouslySetInnerHTML={{ __html: articleContent.contentHtml }} />
        </section>
    );
}
