import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { useState } from "react";
import Gallery  from "@/components/Gallery";

import { getProducts, getProductBySlug } from "@/lib/service";

export default function ProductDetails({ product }: { product: any }) {
  const imageCount = product.productField.gallery.nodes.length;
  const [headerImage, setHeaderImage] = useState(
    product.productField.thumbnail.node.sourceUrl
  );
  const handleImageClick = (image: any) => {
    setHeaderImage(image.sourceUrl);
  };
  const galleryImages = [
    product.productField.thumbnail.node, // Include product thumbnail in the gallery
    ...product.productField.gallery.nodes,
  ];

  return (
    <section className="container mx-auto py-12">
      <div
        className="product-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
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
          <h1 className="text-2xl md:text-4xl mb-4">{product.title}</h1>
          <p className="italic">{product.productField.category.nodes[0].name}</p>
        </div>
      </div>
      <Gallery images={galleryImages} onClick={handleImageClick} />
      <div
        className="product-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: product.productField.description }}
      ></div>
      <div className="product-store"></div>
      <div className="product-brand w-full md:w-3/5 mx-auto mt-20 py-6 text-lg">
        <p>Product by</p>
        <img src={product.productField.brand.node.sourceUrl} className="max-h-[100px]"/>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts(100); // retrieve first 100 products

  return {
    paths: products.map((product: any) => `/products/${product.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProductBySlug(params?.slug as string);

  return {
    props: { product },
  };
};