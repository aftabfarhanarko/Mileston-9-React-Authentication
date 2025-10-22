import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewesCard from "../Components/NewesCard";
import LetasNews from "../Components/LetasNews";

const CaterogyNews = () => {
  const [storsNews, setStorsNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setStorsNews(data);
    } else if (id == "1") {
      const filterdatasa = data.filter(
        (newes) => newes.others.is_today_pick == true
      );
      setStorsNews(filterdatasa);
    } else {
      const filterdata = data.filter((newes) => newes.category_id == id);
      setStorsNews(filterdata);
    }
  }, [data, id]);

 

  return (
    <>
      <div>
        <h1 className="mb-9 font-semibold text-lg">
          Total <span className="text-red-600">{storsNews.length}</span> News
          Found
        </h1>
        <div>
          {storsNews.map((card, index) => (
            <NewesCard key={index} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CaterogyNews;
