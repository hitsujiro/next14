import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("エラーだ");
  }
  await new Promise((resolve) => setTimeout(resolve, 3500));
  const articles = await res.json();
  return articles;
};
