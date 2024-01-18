import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "./CircularProgress";

export default function Item({ list, type }) {
  return (
    <Link to={`/detail/${list.id}`} state={{ type: `${type}` }} key={list.id}>
      <div className="w-[180px] h-[340px] overflow-hidden rounded-lg shadow-xl">
        {/* TopPic */}
        <div className="w-full h-[250px]">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w400${list.poster_path}`}
            alt=""
          />
        </div>

        {/* Content */}
        <div className="relative w-fill h-[90px] pt-4 px-2">
          <h2 className="font-semibold text-[14px]">
            {list.origianl_title || list.original_name}
          </h2>
          <p className="text-sm">{list.release_date || list.first_air_date}</p>
          {/* review */}
          <div className=" absolute -top-5 left-2">
            <CircularProgress
              rate={`${parseInt(Math.floor(list.vote_average * 10))}%`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
