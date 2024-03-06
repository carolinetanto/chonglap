import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { useState } from "react";
import Gallery  from "@/components/Gallery";

import { getBlogs, getBlogBySlug } from "@/lib/service";

export default function BlogDetails({ blog }: { blog: any }) {
  const imageCount = blog.blogField.gallery.nodes.length;
  const [headerImage, setHeaderImage] = useState(
    blog.blogField.thumbnail.node.sourceUrl
  );
  const handleImageClick = (image: any) => {
    setHeaderImage(image.sourceUrl);
  };
  const galleryImages = [
    blog.blogField.thumbnail.node, // Include blog thumbnail in the gallery
    ...blog.blogField.gallery.nodes,
  ];

  return (
    <section className="container mx-auto py-12">
      <div
        className="blog-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        ></div>
        <div className="z-20 text-center">
          <h1 className="text-2xl md:text-4xl mb-4">{blog.title}</h1>
          <p className="italic">{blog.blogField.category.nodes[0].name}</p>
          <p className="italic">Source: {blog.blogField.author}</p> 
        </div>
      </div>
      <Gallery images={galleryImages} onClick={handleImageClick} />
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