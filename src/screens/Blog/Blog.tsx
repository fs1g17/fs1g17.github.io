import React, { FC, useEffect, useState } from "react";

const Blog: FC = () => {
  const [artciles, setArticles] = useState();

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

        for (let i = 0; i < articles.length; i++) {
          const title = articles[i].querySelector("title");
          console.log(title ? title.textContent : "DIDN'T WORK");
        }
      } catch (error) {}
    };

    console.log("inside useEffect");
    doFetch();
  });

  return <div>Blog</div>;
};

export default Blog;
