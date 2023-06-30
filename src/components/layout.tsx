import { Props } from "@/utils/types";
import { Roboto } from "next/font/google";
import Link from "next/link";

const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: Props) {
  return (
    <main
      className={`${font.className} max-w-4xl mx-auto py-10 md:px-0 px-6 flex w-full gap-6`}
    >
      <aside className="w-2/12 ">
        <div className="sticky top-10 left-0 flex items-end flex-col text-lg">
          <Link className="border-r-2 border-slate-700 pr-4 py-2" href="/">
            Home
          </Link>
          <Link className="border-r-2 border-slate-700 pr-4 py-2" href="/about">
            About
          </Link>
          <Link
            className="border-r-2 border-slate-700 pr-4 py-2"
            href="/projects"
          >
            Projects
          </Link>
          <Link className="border-r-2 border-slate-700 pr-4 py-2" href="/blogs">
            Blogs
          </Link>
        </div>
      </aside>
      <div className="w-10/12 flex flex-col gap-6">
        <header className="bg-gradient-to-br from-slate-800 to-slate-800/90 text-slate-50 flex items-center justify-center flex-col py-10 gap-4 rounded-xl">
          <h1 className="text-3xl uppercase tracking-widest font-bold">
            Amir Azmi
          </h1>
          <p>Front End Developer</p>
        </header>
        <div>{children}</div>
      </div>
    </main>
  );
}
