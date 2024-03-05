import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const StoreAccordion = ({ product }: { product: any }) => {
  return (
    <div className="product-block p-2 rounded-md">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={product.productField.thumbnail.node.sourceUrl ?? defaultImage}
            fill
            alt={product.title}
            className="absolute rounded-md h-full w-full object-cover"
          />
        </div>
      </Link>
      <Link href={`/products/${product.slug}`} className="post-content my-4">
        <h3 className="text-2xl py-4">{product.title}</h3>
        <div
          className="italic"
          dangerouslySetInnerHTML={{ __html: product.productField.category.nodes[0].name}}
        ></div>
      </Link>
    </div>
  );
};