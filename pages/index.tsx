import { GetStaticProps } from "next";
import { Block } from "@/components/Block";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { getPosts, getProducts, getBlogs, getEvents } from "@/lib/service";
import { generateSlides } from '@/utils/generateSlides/generateSlides';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

export default function HomePage({ latestProduct, latestBlog, latestEvent }: { latestProduct: any, latestBlog: any, latestEvent: any }) {
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height       : '15rem',
  };
  return (
    <>
      <div className="container mx-auto py-8 px-8">
        <div className="page-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
          style={{
            backgroundImage: `url("https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
          <div
            className="absolute w-full h-full z-10 rounded-md"
            style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
          ></div>
          {/* <div className="wrapper absolute w-full h-full z-10 rounded-md">
            <h2 id="autoplay-example-heading">Autoplay</h2>
            <Splide
              options={ options }
              aria-labelledby="autoplay-example-heading"
              hasTrack={ false }
            >
              <div style={ { position: 'relative' } }>
                <SplideTrack>
                  { generateSlides().map( slide => (
                    <SplideSlide key={ slide.src }>
                      <img src={ slide.src } alt={ slide.alt }/>
                    </SplideSlide>
                  ) ) }
                </SplideTrack>
              </div>

              <div className="splide__progress">
                <div className="splide__progress__bar" />
              </div>

              <button className="splide__toggle">
                <span className="splide__toggle__play">Play</span>
                <span className="splide__toggle__pause">Pause</span>
              </button>
            </Splide>
          </div> */}
          <div className="z-20 text-center max-w-[500px]">
            <h1 className="text-xl md:text-4xl lg:text-5xl">Your Healthcare and Pharmaceutical Distribution Partner</h1>
          </div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="grid lg:grid-row-2 gap-8">
            <Block item={latestProduct} key={latestProduct.slug} type="products" />
            <Block item={latestBlog} key={latestBlog.slug} type="blogs" />
          </div>
          <div className="grid lg:col-span-2">
            <Block item={latestEvent} key={latestEvent.slug} type="events" />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(1);
  const blogs = await getBlogs(1);
  const events = await getEvents(1);

  return {
    props: {
      latestProduct: products[0],
      latestBlog: blogs[0] || null, 
      latestEvent: events[0],
    },
    revalidate: 3600,
  };
};