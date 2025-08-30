"use client";
import Link from "next/link";
import ProfilePictureSquare from "../ui/ProfilePictureSquare";
import { usePathname } from "next/navigation";

// Icons
import { BiNews } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";
import { BsCameraVideo } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { BiCog } from "react-icons/bi";


// Ant Ui Icons
import {Divider} from 'antd'
// Data for sidebar navigation
const navData = [
  { id: 1, name: "Feed", icon: <BiNews />, href: "/feed" },
  { id: 2, name: "Friends", icon: <TbHeartHandshake />, href: "/friends" },
  { id: 3, name: "Watch videos", icon: <BsCameraVideo />, href: "/watch-videos" },
  { id: 4, name: "Groups", icon: <BiGroup />, href: "/groups" },
  { id: 5, name: "Settings", icon: <BiCog />, href: "/settings" },
];


/**
 * LeftSidebar component that includes personal information and navigation links with some groups.
 *
 * @returns Left sidebar component with personal info and navigation links and groups
 */
export const LeftSidebar = () => {
  return (
    <aside className="w-[600px]  mt-4">
      <PersonalInfoCard />

      <div className="mt-4 bg-white rounded-lg shadow-sm">

      {/* Links for other pages */}
      <Navigation />
      <Divider />
      {/* Groups Section */}

        <div className=" p-3">
            <h2 className="text-xl font-bold mb-2 text-gray-600">Groups</h2>
            <ul className="space-y-2">
            <li className="flex items-center gap-2 p-2 rounded-sm hover:bg-teal-50 border border-black cursor-pointer">
                <span className="text-2xl">👨‍💻</span>
                <p className="text-md font-medium text-gray-400">Developers</p>
            </li>
            <li className="flex items-center gap-2 p-2 rounded-sm hover:bg-teal-50 border border-black cursor-pointer">
                <span className="text-2xl">🎮</span>
                <p className="text-md font-medium text-gray-400">Gamers</p>
            </li>
            <li className="flex items-center gap-2 p-2 rounded-sm hover:bg-teal-50 border border-black cursor-pointer">
                <span className="text-2xl">📚</span>
                <p className="text-md font-medium text-gray-400">Book Lovers</p>
            </li>
            </ul>
        </div>
      </div>
    </aside>
  );
};


/**
 * PersonalInfoCard component that displays personal information.
 *
 *
 * @returns A card component displaying personal information.
 */
const PersonalInfoCard = () => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm ">
      <div className="flex gap-4 cursor-pointer">
        <ProfilePictureSquare
          src="/profile-picture.jpg"
          alt="Profile Picture"
          size={50}
        />

        <div className=" mt-2 flex flex-col gap-1">
          <h3 className="text-zinc-700 font-extrabold text-xl inter inter-extrabold">
            Mike Smith
          </h3>
          <p className="text-lg text-gray-400 font-semibold">@mikesmith1122</p>
        </div>
      </div>

      <div className=" mt-3 px-1 py-2 bg-gray-200 rounded-md flex">
        <div className="w-1/3 gap-2 flex flex-col">
          <p className="text-gray-500 text-center font-mono">Followers</p>
          <h2 className="text-xl text-gray-700 text-center font-extrabold">
            1.2k
          </h2>
        </div>
        <div className="w-1/3 gap-2 flex flex-col">
          <p className="text-gray-500 text-center font-mono">Following</p>
          <h2 className="text-xl text-gray-700 text-center font-extrabold">
            77
          </h2>
        </div>
        <div className="w-1/3 gap-2 flex flex-col">
          <p className="text-gray-500 text-center font-mono">Posts</p>
          <h2 className="text-xl text-gray-700 text-center font-extrabold">
            54
          </h2>
        </div>
      </div>
    </div>
  );
};



/**
 * Navigation component that displays navigation links.
 *
 * @returns A navigation component with links to different pages.
 */
const Navigation = () => {
  const pathname = usePathname(); // gives current route

  return (
    <div className="p-3">
      {/* <h2 className="text-xl font-bold mb-2 text-gray-600">Navigation</h2> */}
      <ul className="space-y-2">
        {navData.map((item) => {
          const isActive = pathname === item.href; // check active link
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-md transition-colors
                  ${isActive 
                    ? "bg-teal-500 text-white inter-bold" 
                    : "text-gray-400 hover:bg-teal-50 inter-medium"}
                `}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-md inter ">{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
