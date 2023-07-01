import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

export default function PostPage({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Link
        href="/posts"
        className="underline hover:text-slate-500 transition-colors duration-150 ease-linear my-4 block"
      >
        Back to Posts
      </Link>
      <div className="aspect-[720/320] mb-6 md:mb-8">
        <Image
          src={post.thumbnail as string}
          alt={post.title}
          width={720}
          height={300}
          className="w-full h-full object-center object-cover rounded-xl"
        />
      </div>
      <div className="prose prose-lg md:prose-xl">
        <h1>{post.title}</h1>
        <MDXContent />
      </div>
    </>
  );
}

export const getStaticPaths = () => {
  const paths = allPosts.map((post) => `/posts/${post._raw.flattenedPath}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params!.slug;
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);

  if (!post) return { notFound: true };
  return { props: { post } };
};
