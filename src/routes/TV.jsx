import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Item from "../components/Item";

export default function TV() {
  const type = "tv";
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = (pageNumber = 1) => {
    const url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${pageNumber}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGFhYmZkZTlmNGY0MGNjYzVjYmM0ZjFjODE4MTUyYiIsInN1YiI6IjY1OWNhMDFjYjZjZmYxMDI1Yjk0YjJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yfPbGJ-c_OzNonXxiGhS3SIVm8XFK8o5NowWRYXwoIs",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLists((prev) => [...prev, ...json.results]);
      })
      .catch((err) => console.error("error:" + err));
  };
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="w-[1000px] flex justify-center flex-wrap gap-4 gap-y-8">
          {/* item */}
          {lists?.map((list) => (
            <Item list={list} type={type} />
          ))}
          <div
            onClick={handleLoadMore}
            className="w-[97%] py-2 bg-[#01b4E4] text-white font-semibold text-center hover:text-black cursor-pointer"
          >
            Load More
          </div>
        </div>
      </div>
    </Layout>
  );
}
