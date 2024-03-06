import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { useState } from "react";
import Gallery  from "@/components/Gallery";

import { getEvents, getEventBySlug } from "@/lib/service";

export default function EventDetails({ event }: { event: any }) {
  const imageCount = event.eventField.gallery.nodes.length;
  const [headerImage, setHeaderImage] = useState(
    event.eventField.thumbnail.node.sourceUrl
  );
  const handleImageClick = (image: any) => {
    setHeaderImage(image.sourceUrl);
  };
  const galleryImages = [
    event.eventField.thumbnail.node, // Include blog thumbnail in the gallery
    ...event.eventField.gallery.nodes,
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
          <h1 className="text-2xl md:text-4xl mb-4">{event.title}</h1>
          <p className="italic">{event.eventField.category.nodes[0].name}</p>
          <p className="italic">{event.eventField.startDate} - {event.eventField.endDate}</p>
        </div>
      </div>
      <Gallery images={galleryImages} onClick={handleImageClick} />
      <div
        className="blog-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: event.eventField.description}}
      ></div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getEvents(100); // retrieve first 100 blogs

  return {
    paths: events.map((event: any) => `/events/${event.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = await getEventBySlug(params?.slug as string);

  return {
    props: { event },
  };
};