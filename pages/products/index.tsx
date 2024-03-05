import { GetStaticProps } from "next";

import { Block } from "@/components/Block";
import { getProducts } from "@/lib/service";

export default function Products({ products }: { products: any }) {
  return (
    <>
      <div className="container mx-auto py-8">
        <h3 className="text-xl">All my products ({products.length})</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product: any) => {
            return <Block item={product} key={product.slug} type="products" />;
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(100); // retrieve first 100 posts

  return {
    props: {
      products,
    },
    revalidate: 3600,
  };
};