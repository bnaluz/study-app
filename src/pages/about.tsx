import Link from "next/link";
import Image from "next/image";

const about = () => {
  return (
    <div className="h-screen">
      <div className="mt-0 fixed w-full h-20 shadow-xl z-[100] bg-slate-600">
        <div className="flex justify-between items-center py-11 w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <div className="text-lg hover:text-white">Home</div>
          </Link>
        </div>
      </div>

      <div className="pt-32">
        <div className="bg-slate-600  font-bold text-2xl py-8 text-white rounded-lg mx-auto text-center max-w-3xl">
          Hello, thanks for checking out Notes!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto pt-10">
          <div className="mx-auto">
            <div className="font-bold text-2xl">Technologies used:</div>
            <div className="grid grid-cols-4 gap-8 py-6 ">
              <Image src={"/nextjs.png"} alt={"/"} width="75" height="75" />
              <Image src={"/typescript.png"} alt={"/"} width="75" height="75" />
              <Image src={"/react.png"} alt={"/"} width="75" height="75" />
              <Image src={"/tailwind.png"} alt={"/"} width="75" height="75" />
              <Image src={"/firebase.png"} alt={"/"} width="75" height="75" />
              <Image src={"/github.png"} alt={"/"} width="75" height="75" />
              <Image src={"/vercel2.png"} alt={"/"} width="75" height="75" />
            </div>
          </div>
          <div className="mx-auto md:mr-24">
            <div className="font-bold text-2xl">Read Me:</div>
            <div className="bg-slate-600 rounded-3xl text-white">
              <div className="px-12 mx-8 mt-4 py-4 text-lg rounded-3xl ">
                Notes is a web app created using NextJs, TypeSript, React,
                TailwindCSS, FireBase, Github, and Vercel. The purpose for Notes
                is for users to come in and add a note for themselves or another
                person.
              </div>
              <div className="px-12 mx-8 text-lg">
                <ul className="list-disc pb-2">
                  <li>
                    The project utilizes NextJs framework and its routing and
                    lazy loading images.
                  </li>
                  <li>
                    TypeScript and type definitions are used in the project to
                    ensure data is collected in the correct format and reduce
                    undefined errors.
                  </li>
                  <li>
                    The React library is used to build out the components of the
                    app.
                  </li>
                  <li>Styled with TailwindCSS.</li>
                  <li>
                    Integrated with Google Firebase as real time data base.
                  </li>
                  <li>
                    Version control through Github, and deployed on Vercel.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
