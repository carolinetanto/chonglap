import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { Slider } from "@/components/Slider";

import { getEvents, getEventBySlug } from "@/lib/service";

export default function EventDetails({ event }: { event: any }) {
  const { thumbnail, gallery } = event.eventField;
  const galleryImages = [thumbnail.node, ...gallery.nodes];

  return (
    <section className="container mx-auto py-12">
      <div className="event-header w-full md:w-3/5 mx-auto text-lg">
        <Slider images={galleryImages}/>
      </div>
      <div className="event-overview w-full md:w-3/5 mx-auto mt-20 py-6 text-lg">
        <h1 className="text-2xl md:text-4xl mb-4">{event.title}</h1>
        <p className="italic">{event.eventField.category.nodes[0].name}</p>
        <p className="italic">{event.eventField.dateStart} - {event.eventField.dateEnd}</p>
      </div>
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