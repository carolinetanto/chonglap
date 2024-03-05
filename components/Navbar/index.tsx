import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="container mx-auto py-4 px-4">
      <div className="navbar w-full md:w-3/5 mx-auto border-b-2">
        <div className="flex items-center justify-center pb-4 text-base md:text-xl">
          <Link href="/" className="px-4">
            <b>Chong Lap</b>
          </Link>
          <Link href="/products" className="px-4">
            Products
          </Link>
          <Link href="/blogs" className="px-4">
            Blogs
          </Link>
          <Link href="/events" className="px-4">
            Events
          </Link>
        </div>
      </div>
    </header>
  );
};


