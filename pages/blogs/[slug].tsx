import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { Slider } from "@/components/Slider";

import { getBlogs, getBlogBySlug } from "@/lib/service";

export default function BlogDetails({ blog }: { blog: any }) {
  const { thumbnail, gallery } = blog.blogField;
  const galleryImages = [thumbnail.node, ...gallery.nodes];

  return (
    <section className="container mx-auto py-12">
      <div className="blog-header w-full md:w-3/5 mx-auto text-lg">
        <Slider images={galleryImages}/>
      </div>
      <div className="blog-overview w-full md:w-3/5 mx-auto mt-20 py-6 text-lg">
        <h1 className="text-2xl md:text-4xl mb-4">{blog.title}</h1>
        <p className="italic">{blog.blogField.category.nodes[0].name}</p>
        <a href={blog.blogField.source.url}>Source: {blog.blogField.source.title}</a>
      </div>
      <div
        className="blog-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: blog.blogField.content }}
      ></div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getBlogs(100); // retrieve first 100 blogs

  return {
    paths: blogs.map((blog: any) => `/blogs/${blog.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params?.slug as string);

  return {
    props: { blog },
  };
};