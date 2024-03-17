import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const Block = ({ item, type }: { item: any; type: string }) => {
  let thumbnail;

  // Check the post type and retrieve the appropriate thumbnail
  if (type === "products") {
    thumbnail = item.productField.thumbnail?.node.sourceUrl;
  } else if (type === "events") {
    thumbnail = item.eventField.thumbnail?.node.sourceUrl;
  } else if (type === "blogs") {
    thumbnail = item.blogField.thumbnail?.node.sourceUrl;
  }

  return (
    <Link href={`/${type}/${item.slug}`} className={`${type}-block rounded-md transition-all duration-200 ease-linear hover:-translate-y-[3px]`}>
      <div>
        <div className="relative h-60">
          <Image
            src={thumbnail ?? defaultImage}
            fill
            alt={item.title}
            className="absolute rounded-t-md h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="post-content p-4 bg-black rounded-b-md">
        <h3 className="text-2xl">{item.title}</h3>
        <p className="rounded-full border-2 mt-3 p-1 border-white max-w-[150px] text-center">{
              type === "products"
                ? item.productField.category.nodes[0].name
                : type === "events"
                ? item.eventField.category.nodes[0].name
                : item.blogField.category.nodes[0].name}</p>
      </div>
    </Link>
  );
};