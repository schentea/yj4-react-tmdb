import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TrailersPage() {
  const [lists, setLists] = useState();
  let tabs2 = [
    { id: "popular", label: "Popular" },
    { id: "now_playing", label: "Now Playing" },
    { id: "top_rated", label: "Top Rated" },
    { id: "upcoming", label: "Upcoming" },
  ];
  const [activeTab2, setActiveTab2] = useState(tabs2[0].id);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${activeTab2}?language=en-US&page=1`;
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
        console.log(json.results);
        setLists(json.results.slice(0, 3));
      })
      .catch((err) => console.error("error:" + err));
  }, [activeTab2]);

  return (
    <div className="w-full h-[400px] flex justify-center mt-20 -z-30">
      <div className="w-[1300px] h-full justify-center  bg-[#08304C]">
        <div className="flex mt-10 ml-10">
          <h2 className="text-2xl font-semibold text-white">Trailer</h2>
          <div className="ml-2 mb-10 border-2 border-gray-900 rounded-full">
            {tabs2.map((tab2) => (
              <button
                key={tab2.id}
                onClick={() => setActiveTab2(tab2.id)}
                className={`${
                  activeTab2 === tab2.id ? "text-black" : "text-white"
                } relative rounded-full px-6 py-3 text-l font-semibold transition `}
                style={{ zIndex: 2 }}
              >
                {activeTab2 === tab2.id && (
                  <motion.span
                    layoutId="bubble1"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className=" absolute inset-0 bg-white rounded-full -z-10"
                  />
                )}
                {tab2.label}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-[300px] flex flex-row justify-center">
          {lists.map((item) => (
            <div>
              <img
                className=" p-3"
                src={`https://image.tmdb.org/t/p/w400${item.backdrop_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
