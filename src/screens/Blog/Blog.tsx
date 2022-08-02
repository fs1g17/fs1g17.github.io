import React, { useEffect, FC, useState } from "react";

import BlogList from "./BlogList";

export type Article = {
  imgUrl: string;
  title: string;
  body: string;
  readMoreUrl: string;
};

const Blog: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const mediumUrl =
    "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@fedor.selenskiy";

  useEffect(() => {
    const doFetch = async () => {
      try {
        console.log("performing fetch");
        const res = await fetch(mediumUrl);
        const xml = await res.text();
        var node = new DOMParser().parseFromString(
          xml,
          "text/xml"
        ).documentElement;
        const articles = node.querySelectorAll("item");

        const loadedArticles: Article[] = [];

        for (let i = 0; i < articles.length; i++) {
          const titleElement = articles[i].querySelector("title");
          if (!titleElement) {
            continue;
          }

          const title = titleElement.textContent;
          if (!title) {
            continue;
          }

          const linkElement = articles[i].querySelector("link");
          if (!linkElement) {
            continue;
          }

          const readMoreUrl = linkElement.textContent;
          if (!readMoreUrl) {
            continue;
          }

          const all = articles[i].querySelectorAll("*");
          const content = all[all.length - 1];

          if (!content.textContent) {
            continue;
          }

          var parsedContent = new DOMParser().parseFromString(
            content.textContent,
            "text/xml"
          ).documentElement;

          const img = parsedContent.querySelector("img");
          if (!img) {
            continue;
          }

          const imgUrl = img.getAttribute("src");
          if (!imgUrl) {
            continue;
          }

          const body = content.textContent.substring(0, 100);

          const article: Article = {
            imgUrl,
            title,
            body,
            readMoreUrl,
          };

          loadedArticles.push(article);
        }

        setArticles(loadedArticles);
      } catch (error) {}
    };

    console.log("inside useEffect");
    doFetch();
  }, []);

  return <BlogList articles={articles} />;
};

export default Blog;
