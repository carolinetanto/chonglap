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
    <div className={`${type}-block p-2 rounded-md`}>
      <Link href={`/${type}/${item.slug}`}>
        <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={thumbnail ?? defaultImage}
            fill
            alt={item.title}
            className="absolute rounded-md h-full w-full object-cover"
          />
        </div>
      </Link>
      <Link href={`/${type}/${item.slug}`} className="post-content my-4">
        <h3 className="text-2xl py-4">{item.title}</h3>
        <div
          className="italic"
          dangerouslySetInnerHTML={{
            __html:
              type === "products"
                ? item.productField.category.nodes[0].name
                : type === "events"
                ? item.eventField.category.nodes[0].name
                : item.blogField.category.nodes[0].name,
          }}
        ></div>
      </Link>
    </div>
  );
};