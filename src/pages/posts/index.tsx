import { Post, allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";
import Link from "next/link";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Image from "next/image";

export default function PostsListPage({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-wrap -mx-2 items-stretch">
      {posts.map((p) => {
        const createdAt = formatRelative(
          subDays(new Date(p.date), 3),
          new Date()
        );
        return (
          <div className="w-full md:w-1/2 p-2" key={p._id}>
            <Link
              className="block border rounded-xl h-full hover:border-slate-800/50 transition-colors duration-150 ease-linear"
              href={p.url}
            >
              {p.thumbnail && (
                <div className="aspect-[720/320]">
                  <Image
                    src={p.thumbnail as string}
                    alt={p.title}
                    width={720}
                    height={300}
                    className="rounded-t-xl w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl mb-1">{p.title}</h2>
                <p className="text-sm text-slate-500 mb-2">{createdAt}</p>
                <p className="text-slate-600">{p.subtitle}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const posts = allPosts;

  if (!posts) return { notFound: true };
  return { props: { posts } };
};
