import { GetStaticProps } from "next";

import { Block } from "@/components/Block";
import { getBlogs } from "@/lib/service";

export default function Blogs({ blogs }: { blogs: any }) {
  return (
    <>
      <div className="container mx-auto py-8">
        <h3 className="text-xl">All my blogs ({blogs.length})</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog: any) => {
            return <Block item={blog} key={blog.slug} type="blogs" />;
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlogs(100); // retrieve first 100 blogs

  return {
    props: {
      blogs,
    },
    revalidate: 3600,
  };
};