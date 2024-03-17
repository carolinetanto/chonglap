import { GetStaticProps } from "next";
import { useState } from "react";
import { PostBlock } from "@/components/PostBlock";
import { getProducts } from "@/lib/service";

export default function Products({ products }: { products: any }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((products: any) => products.productField.category.nodes[0].name === selectedCategory);

  // Get unique categories from products
  const categories = products.reduce((uniqueCategories: string[], products: any) => {
    const categoryName = products.productField.category.nodes[0].name;
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
      <div className="page-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url("https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}>
        <div
          className="absolute w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        ></div>
        <div className="z-20 text-center">
          <h1 className="text-5xl">Products</h1>
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
          {filteredProducts.map((product: any) => (
            <PostBlock item={product} key={product.slug} type="products" />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(100); // retrieve first 100 posts

  return {
    props: {
      products,
    },
    revalidate: 3600,
  };
};