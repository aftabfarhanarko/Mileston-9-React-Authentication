import Marquee from "react-fast-marquee";

const LetasNews = () => {

  return (
    <div className="flex items-center gap-5 bg-base-300 p-3 rounded-md my-5">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5 items-center cursor-pointer" pauseOnHover={true} speed={70}>
        <p className="font-semibold whitespace-nowrap">
          Lorem weydgweu we8weydr89dwy qw9 ed89weu qw389ue qwu89qwyed89wq e89qwh eduih 8q79wydf89qwhd9 8uw e890uwq eu
        </p>
        {/* {storsNews.map((title, index) => (
          <p key={index} className="font-semibold whitespace-nowrap">
            {title}
          </p>
        ))} */}
      </Marquee>
    </div>
  );
};

export default LetasNews;
