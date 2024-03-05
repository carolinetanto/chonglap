import { GetStaticProps } from "next";

import { Block } from "@/components/Block";
import { getEvents } from "@/lib/service";

export default function Events({ events }: { events: any }) {
  return (
    <>
      <div className="container mx-auto py-8">
        <h3 className="text-xl">All my events ({events.length})</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event: any) => {
            return <Block item={event} key={event.slug} type="events" />;
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents(100); // retrieve first 100 events

  return {
    props: {
      events,
    },
    revalidate: 3600,
  };
};