import NewsDetail from "../../../components/NewsDetail";

async function getNewsData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
}

export default async function NewsPage({ params }: { params: { id: string } }) {
  const newsData = await getNewsData(params.id);

  if (!newsData) {
    return <div className="text-center text-red-500">News not found or failed to load</div>;
  }

  return <NewsDetail news={newsData} />;
}
