import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { getProducts, getProductBySlug } from "@/lib/service";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Slider } from "@/components/Slider";

export default function ProductDetails({ product }: { product: any }) {
  const { thumbnail, gallery } = product.productField;
  const galleryImages = [thumbnail.node, ...gallery.nodes];

  return (
    <section className="container mx-auto py-12">
      <div className="product-header w-full md:w-3/5 mx-auto text-lg">
        <Slider images={galleryImages}/>
      </div>
      <div className="product-overview w-full md:w-3/5 mx-auto mt-20 py-6 text-lg">
        <h1 className="text-2xl md:text-4xl mb-4">{product.title}</h1>
        <p className="italic">{product.productField.category.nodes[0].name}</p>
      </div>
      <div
        className="product-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: product.productField.description }}
      ></div>
      <div className="product-store w-full md:w-3/5 mx-auto mt-20 py-6 text-lg">
        {product.productField.store.hongKongIsland && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Hong Kong Island
            </AccordionSummary>
            <AccordionDetails>
              {product.productField.store.hongKongIsland.map((store: any, index: any) => (
                <div key={`hki-${index}`}>
                  <h4>{store.name}</h4>
                  <p>{store.address}</p>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
        {product.productField.store.kowloon && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Kowloon
            </AccordionSummary>
            <AccordionDetails>
              {product.productField.store.kowloon.map((store: any, index: any) => (
                <div key={`hki-${index}`}>
                  <h4>{store.name}</h4>
                  <p>{store.address}</p>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
        {product.productField.store.newTerritories && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              New Territories
            </AccordionSummary>
            <AccordionDetails>
              {product.productField.store.newTerritories.map((store: any, index: any) => (
                <div key={`hki-${index}`}>
                  <h4>{store.name}</h4>
                  <p>{store.address}</p>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
      </div>
      <div className="product-brand w-full md:w-3/5 mx-auto mt-20 py-6 text-lg">
        <p>Product by</p>
        <img src={product.productField.brand.node.sourceUrl} className="max-h-[100px]"/>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts(100); // retrieve first 100 products

  return {
    paths: products.map((product: any) => `/products/${product.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProductBySlug(params?.slug as string);

  return {
    props: { product },
  };
};