export interface Props {
  children?: React.ReactNode;
}

export interface PostPage {
  frontmatter: {
    title: string;
    date: string;
    cover_image: string;
  };
  slug: string;
  content: string;
}
