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
          if (!titleElement || !titleElement.textContent) {
            continue;
          }

          const title = titleElement.textContent;

          const linkElement = articles[i].querySelector("link");
          if (!linkElement || !linkElement.textContent) {
            continue;
          }

          const readMoreUrl = linkElement.textContent;

          if (!articles[i]) {
            continue;
          }

          var encodedContent = articles[i].getElementsByTagNameNS(
            "*",
            "encoded"
          );

          if (!encodedContent || !encodedContent.item(0)) {
            continue;
          }

          var content = encodedContent.item(0);
          if (!content || !content.textContent) {
            continue;
          }

          const parser = new DOMParser();
          const parsedContent = parser.parseFromString(
            content.textContent,
            "text/html"
          );

          const img = parsedContent.querySelector("img");
          if (!img) {
            console.log("no img");
            continue;
          }

          const imgUrl = img.getAttribute("src");
          if (!imgUrl) {
            console.log("no src");
            continue;
          }

          const p = parsedContent.querySelector("p");
          if (!p || !p.textContent) {
            console.log("no p");
            continue;
          }

          const body = p.textContent.substring(0, 100);

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

    doFetch();
  }, []);

  return <BlogList articles={articles} />;
};

export default Blog;
