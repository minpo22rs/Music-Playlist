import { useEffect, useState, useRef } from "react";

interface PlaylistItem {
  name: string;
  category: string;
  created: string;
  play: string;
}
import TopNav from "./top_nav";

export default function Sidebar() {
  const playListData: PlaylistItem[] = [
    {
      name: "My Playlist #1",
      category: "Playlist",
      created: "12 hours ago",
      play: "",
    },
    {
      name: "My Playlist #2",
      category: "Playlist",
      created: "12 hours ago",
      play: "",
    },
  ];

  return (
    <>
      <TopNav />
      <table className="  ">
        <thead className="h-8 ">
          <tr className="border-b-[1px] border-[rgba(255,255,255,0.1)] ">
            <th className="text-[12px] text-[#a6a6a6] text-start w-1/2">
              Title
            </th>
            <th className="text-[12px] text-[#a6a6a6] text-start w-1/4">
              Date Added
            </th>
            <th className="text-[12px] text-[#a6a6a6] text-end w-1/4">
              Played
            </th>
          </tr>
        </thead>
        <tbody>
          {playListData.map((item, index) => (
            <PlaylistItem
              key={index}
              name={item.name}
              category={item.category}
              created={item.created}
              play={item.play}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export function PlaylistItem({ name, category, created, play }: PlaylistItem) {
  return (
    <tr
      onClick={() => console.log(name)}
      className=" cursor-pointer  rounded-full action:bg-white  hover:bg-[rgba(255,255,255,0.08)] active:bg-[rgba(255,255,255,0.15)]  "
    >
      <td className=" px-1 py-1 text-start w-full flex gap-1 ">
        <p className="text-[15px] text-white">{name}</p>
        <p className="text-[14px] text-[#9e9e9f]">• {category}</p>
      </td>
      <td className="px-1 py-1 text-start w-1/4">
        <p className="text-[14px] text-[#9e9e9f]">{created}</p>
      </td>
      <td className="px-1 py-1 text-end w-1/4">{play}</td>
    </tr>
  );
}
