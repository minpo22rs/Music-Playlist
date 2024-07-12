import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faHouse,
  faHeadphones,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  return (
    <div className=" top-0 left-0 right-0 w-full h-full grid grid-cols-3 z-50 bg-black">
      <div className="col-span-1 "></div>
      <div className="col-span-1  flex justify-center  items-center gap-2 ">
        <div className="min-w-12 min-h-12 flex justify-center items-center bg-[#242424] rounded-full hover:scale-105 ">
          <FontAwesomeIcon className="w-5 h-5  text-[#a6a7a6]" icon={faHouse} />
        </div>

        <div className="w-3/4 h-12  relative flex items-center  focus-within:text-white transitin">
          <FontAwesomeIcon
            className={`w-5 h-5 absolute ml-3  text-[${
              isFocusInput ? "#ffffff" : "#a6a7a6"
            }]`}
            icon={faMagnifyingGlass}
          />
          <input
            type="text"
            name="search"
            placeholder="What do you want to play?"
            autoComplete="off"
            aria-label="What do you want to play?"
            className="pl-10 p-2   w-full h-12  font-bold placeholder-[#a6a7a6]  bg-[#242424] rounded-full"
            onMouseEnter={() => setIsFocusInput(true)}
            onMouseLeave={() => setIsFocusInput(false)}
            onFocusCapture={() => setIsFocusInput(true)}
            onBlurCapture={() => setIsFocusInput(false)}
          />
          <button className="absolute right-0 mr-4 p-0 m-0 flex items-center">
            <FontAwesomeIcon
              className="w-5 h-5     text-[#a6a7a6]"
              icon={faHeadphones}
            />
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-end  items-center gap-4">
        <button className="bg-white text-black font-semibold px-3 py-1 rounded-full hover:scale-105">
          Explore Preminum
        </button>
        <FontAwesomeIcon
          className="w-5 h-5  rounded-full  text-[#a6a7a6] hover:text-white  hover:scale-105"
          icon={faBell}
        />
        <FontAwesomeIcon
          className="w-5 h-5  rounded-full  text-[#a6a7a6] hover:text-white hover:scale-105"
          icon={faUsers}
        />{" "}
        <div className="min-w-12 min-h-12 flex justify-center items-center bg-[#242424] rounded-full hover:scale-105 ">
          <FontAwesomeIcon
            className="w-4 h-4 p-2  rounded-full bg-[#1ed760] text-white"
            icon={faUser}
          />
        </div>
        <div className="w-10"></div>
      </div>
    </div>
  );
}
