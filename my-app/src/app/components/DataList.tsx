import { Article } from "@/types";

const fetchData = async () => {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("エラーだ");
  }
  await new Promise((resolve) => setTimeout(resolve, 3500));
  const articles: Article[] = await res.json();
  return articles;
};

export default async function DataList() {
  const dt = await fetchData();
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Data
      </p>
      <ul className="m-3">
        {dt.map((d) => (
          <li key={d.id}>
            <p>{d.title}</p>
            <p>
              <strong className="mr-3">{d.content}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
