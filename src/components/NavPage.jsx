import logo from "../assets/logocat.png";
import { FaPlus, FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavPage() {
  return (
    <div className="w-full h-[60px] bg-[#032541] flex justify-center">
      {/* 중앙정렬된 네비게이션 컨테이너 */}
      <div className="max-w-[1300px] w-full h-full flex justify-between px-8">
        {/* 1.왼쪽 : 로고 + 메뉴 */}
        <div className="h-full flex space-x-8">
          {/* 로고 */}
          <div className="w-[50px] h-full flex items-center">
            <img className="w-[40px]" src={logo} alt="main_logo" />
          </div>
          {/* 메뉴 영역 */}
          <div className="h-full flex items-center space-x-6 text-white font-bold">
            <Link to="/movies">
              <p>Movie</p>
            </Link>
            <Link to="/tv">
              <p>TV Shows</p>
            </Link>
            <p>People</p>
            <p>More</p>
          </div>
        </div>
        {/* 2.오른쪽 : 아이콘 영역 */}
        <div className="h-full flex space-x-6 items-center text-white">
          {/* 플러스 버튼 */}
          <div className="">
            <FaPlus />
          </div>
          {/* 언어 선택 */}
          <div className="border border-white p-1 text-xs font-bold hover:bg-white hover:text-[#032541]">
            EN
          </div>
          <div>
            <FaBell />
          </div>
          <div className="w-8 h-8 bg-red-600 rounded-full flex justify-center items-center font-bold">
            C
          </div>
          <div className="text-[#01B4E4]">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
