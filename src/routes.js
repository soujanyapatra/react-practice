import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import Table from 'views/learning/table'
import Implementation from 'views/implementation/index'
import RandomGenerator from 'views/randomGenerator/index'
import MapBox from 'views/mapBox/index'
import Chat from "views/chat/index";
import Scroll from 'views/scroll/index'

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAutorenew,
  MdOutlineMap,
  MdOutlineChat,
  MdReadMore
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
  {
    name: "Learning",
    layout: "/admin",
    path: "learning",
    icon: <MdHome className="h-6 w-6" />,
    component: <Table />,
  },
  {
    name: "Table",
    layout: "/admin",
    path: "implementation",
    icon: <MdHome className="h-6 w-6" />,
    component: <Implementation />,
  },
  {
    name: "Random",
    layout: "/admin",
    path: "random",
    icon: <MdAutorenew className="h-6 w-6" />,
    component: <RandomGenerator />,
  },
  {
    name: "Map",
    layout: "/admin",
    path: "map",
    icon: <MdOutlineMap className="h-6 w-6" />,
    component: <MapBox />,
  },
  {
    name: "Chat",
    layout: "/admin",
    path: "chat",
    icon: <MdOutlineChat className="h-6 w-6" />,
    component: <Chat />,
  },
  {
    name: "Scroll",
    layout: "/admin",
    path: "scroll",
    icon: <MdReadMore className="h-6 w-6" />,
    component: <Scroll />,
  },
];
export default routes;
