import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]'">
      <div className="flex justify-between items-center py-11 w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/studyapp-logo.png" alt="/" height={100} width="50" />
        </Link>
        <div>
          <ul className="flex px-6 ">
            <Link href="about">
              <li className="ml-10 text-sm uppercase">About</li>
            </Link>

            <Link href="classes">
              <li className="ml-10 text-sm uppercase">Classes</li>
            </Link>

            <Link href="tools">
              <li className="ml-10 text-sm uppercase">Tools</li>
            </Link>

            <Link href="faq">
              <li className="ml-10 text-sm uppercase">FAQ</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
