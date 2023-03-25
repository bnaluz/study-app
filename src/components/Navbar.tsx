import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mt-0 fixed w-full h-20 shadow-xl z-[100] bg-slate-600">
      <div className="flex justify-between items-center py-11 w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/studyapp-logo.png" alt="/" height="75" width="60" />
        </Link>
        <div>
          <ul className="flex px-6 ">
            <Link href="about">
              <li className="ml-10 text-sm uppercase hover:text-white">
                About
              </li>
            </Link>

            <Link href="classes">
              <li className="hover:text-white ml-10 text-sm uppercase">
                Classes
              </li>
            </Link>

            <Link href="tools">
              <li className="hover:text-white ml-10 text-sm uppercase">
                Tools
              </li>
            </Link>

            <Link href="faq">
              <li className="hover:text-white ml-10 text-sm uppercase">FAQ</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
