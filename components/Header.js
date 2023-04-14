import Image from "next/image";
import {
  HomeIcon,
  CheckBadgeIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between m-5">
      <div className="flex justify-evenly p-5 object-contain flex-grow max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="TRENDING" Icon={ArrowTrendingUpIcon} />
        <HeaderItem title="COLLECTIONS" Icon={FolderPlusIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src="https://cdn.freebiesupply.com/images/large/2x/hulu-logo-black-transparent.png"
        width={200}
        height={100}
        alt="Logo"
      />
    </header>
  );
};

export default Header;
