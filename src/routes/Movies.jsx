import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pagination from "react-js-pagination";
import "./Paging.css";
import Item from "../components/Item";

export default function Movies() {
  const type = "movie";
  const [lists, setLists] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
        setLists(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, [page]);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col items-center justify-center py-16">
          <div className="w-[1000px] flex flex-wrap gap-4 gap-y-8">
            {/* item */}
            {lists?.map((list) => (
              <Item list={list} type={type} />
            ))}
          </div>
          {/* pageNation */}
          <div className="pt-8">
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={lists?.total_pages}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
