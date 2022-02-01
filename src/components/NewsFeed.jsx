import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:4000/news",
    };

    axios.request(options)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const first4articles = articles?.slice(0, 4);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first4articles?.map((article, _index) => (
        <div className="article" key={_index}>
          <p>
            <a href={article.url}>{article.title}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
