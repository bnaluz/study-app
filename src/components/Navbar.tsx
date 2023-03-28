import Image from "next/image";
import Link from "next/link";
import { MdPostAdd } from "react-icons/md";

const Navbar = ({ onCreateNote }: any) => {
  return (
    <div className="mt-0 fixed w-full h-20 shadow-xl z-[100] bg-slate-600">
      <div className="flex justify-between items-center py-11 w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/studyapp-logo.png" alt="/" height="75" width="60" />
        </Link>
        <div>
          <ul className="flex px-6 ">
            <button
              onClick={onCreateNote}
              className="hover:text-white ml-10 text-sm uppercase flex"
            >
              <MdPostAdd size={18} />
              New Post
            </button>

            <Link href="about">
              <li className="ml-10 text-sm uppercase hover:text-white">
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
