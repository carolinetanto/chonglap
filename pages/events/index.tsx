import { GetStaticProps } from "next";
import { useState } from "react";
import { PostBlock } from "@/components/PostBlock";
import { getEvents } from "@/lib/service";

export default function Events({ events }: { events: any }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter events based on the selected category
  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter((events: any) => events.eventField.category.nodes[0].name === selectedCategory);

  // Get unique categories from events
  const categories = events.reduce((uniqueCategories: string[], events: any) => {
    const categoryName = events.eventField.category.nodes[0].name;
    if (!uniqueCategories.includes(categoryName)) {
      uniqueCategories.push(categoryName);
    }
    return uniqueCategories;
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="container mx-auto py-8 px-8">
      <div className="page-header relative flex flex-col justify-center w-full min-h-[300px] rounded-md"
          style={{
          backgroundImage: `url("https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}>
          <div
          className="absolute w-full h-full z-10 rounded-md"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
          ></div>
          <div className="z-20 pl-6">
              <h1 className="text-5xl">Events</h1>
          </div>
      </div>
      <div className="container mx-auto py-8">
        <div className="flex items-center mb-4">
          <div className="ml-4">
            <label htmlFor="category" className="mr-2 text-xl">Filter by category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="py-1 px-2 border border-gray-300 rounded-md text-black"
            >
              <option value="all">All</option>
              {categories.map((category: any) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="my-6 grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event: any) => {
            return <PostBlock item={event} key={event.slug} type="events" />;
          })}
        </div>
      </div>
    </div>
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