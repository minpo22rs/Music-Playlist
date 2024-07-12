import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPlus,
  faArrowRight,
  faArrowLeft,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { useApp } from "@/context/useApp";
export default function TopNav() {
  const { isOpen, setIsOpen } = useApp();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);
  return (
    <div className="w-full flex justify-between items-center text-[#a6a6a6] px-2 ">
      <button className="flex items-center gap-3 text-[#a6a6a6] hover:text-[#fefffe]">
        <FontAwesomeIcon className="w-6 h-6" icon={faBook} />
        <p className="font-bold text-lg">Your Library</p>
      </button>

      <div className="flex items-center gap-1">
        <div className="relative inline-block text-left">
          <div>
            <button
              ref={buttonRef}
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] hover:text-[#fefffe]"
            >
              <FontAwesomeIcon className="w-4 h-4" icon={faPlus} />
            </button>
          </div>

          <div
            ref={menuRef}
            className={`${
              openMenu ? "block" : "hidden"
            } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#242424] shadow-lg ring-1 ring-black ring-opacity-5 p-1`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div role="none">
              <button className="w-full flex items-center gap-3 px-2 py-3 text-sm text-white hover:bg-[rgba(255,255,255,0.1)]">
                <FontAwesomeIcon className="w-4 h-4" icon={faMusic} />
                Create a new playlist
              </button>
              <button className="w-full flex items-center gap-3 px-2 py-3 text-sm text-white hover:bg-[rgba(255,255,255,0.1)]">
                <FontAwesomeIcon className="w-4 h-4" icon={faFolder} />
                Create a playlist folder
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] hover:text-[#fefffe]"
        >
          <FontAwesomeIcon
            className="w-5 h-5"
            icon={isOpen ? faArrowLeft : faArrowRight}
          />
        </button>
      </div>
    </div>
  );
}
