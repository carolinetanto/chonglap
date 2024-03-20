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
    <Link href={`/${type}/${item.slug}`} className={`${type}-block rounded-lg bg-black transition-all duration-200 ease-linear hover:-translate-y-[3px]`}>
      <div>
        <div style={{ position: 'relative', paddingBottom: '75%' }}>
          <Image
            src={thumbnail ?? defaultImage}
            fill
            alt={item.title}
            className="absolute rounded-t-lg h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="post-content p-4 bg-black rounded-b-lg">
        <h3 className="text-2xl">{item.title}</h3>
        <p className="rounded-full border-2 mt-3 p-1 border-white max-w-[350px] text-center">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </Link>
  );
};