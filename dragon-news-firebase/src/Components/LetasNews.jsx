import {  useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData, useParams, useSearchParams } from "react-router";

const LetasNews = () => {
   const myfetchData = useLoaderData();
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const { id } = useParams(); 

  const categoryTitle = searchParams.get("category-title");
  console.log("Category Title:", categoryTitle);


  useEffect(() => {
    if (!myfetchData) return;

    if (id == "0") {
      setData(myfetchData);
    } else if (id == "1") {
      const filtered = myfetchData.filter(
        (news) => news.others?.is_today_pick == true
      );
      setData(filtered);
    } else {
      const filtered = myfetchData.filter(
        (news) => news.category_id == id
      );
      setData(filtered);
    }
  }, [id, myfetchData]);

  const filters =data.map(element => element.title);

  const allTitlesString = filters.join(", "); 



  return (
    <div className="flex items-center gap-5 bg-base-300 p-3 rounded-md my-5">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <div>
             <Marquee
        className="flex gap-9 items-center cursor-pointer"
        pauseOnHover={true}
        speed={70}
      >
        <p className="font-semibold ">
       {allTitlesString}
        </p>
        
      </Marquee>
        </div>
    
    </div>
  );
};

export default LetasNews;
