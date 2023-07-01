import { Props } from "@/utils/types";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import menuData from "@/data/menu.json";

const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();

  return (
    <main
      className={`${font.className} max-w-3xl mx-auto py-6 md:py-10 px-6 flex w-full gap-6`}
    >
      <div className="w-full flex flex-col">
        <header className="bg-gradient-to-br from-slate-800 to-slate-800/90 text-slate-50 flex items-center justify-center flex-col py-10 gap-3 rounded-xl">
          <h1 className="text-3xl uppercase tracking-widest font-bold">
            Amir Azmi
          </h1>
          <p>Front End Developer</p>
        </header>

        <div className="gap-4 flex items-end py-4 max-w-xl w-full mx-auto text-sm md:text-base">
          {menuData.map((i) => {
            let activeClass =
              "hover:bg-slate-200/90 text-slate-800/50 hover:text-slate-800";

            if (
              (i.pathname === "/" && pathname === "/") ||
              (i.pathname !== "/" && pathname.includes(i.pathname))
            ) {
              activeClass = "bg-slate-800 text-white";
            }

            return (
              <Link
                key={i.pathname}
                className={`block w-full text-center bg-slate-200/50 rounded-lg py-2 transition-all duration-150 ease-linear ${activeClass}`}
                href={i.pathname}
              >
                {i.title}
              </Link>
            );
          })}
        </div>

        <div>{children}</div>
      </div>
    </main>
  );
}
