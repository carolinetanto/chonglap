import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <h3 className="text-xl">Important Links</h3>
        <div className="flex items-center justify-center my-4 underline">
          <Link href="https://twitter.com/chonglap" className="px-4">
            Facebook
          </Link>
        </div>
        <small>&copy; {new Date().getFullYear()} All Rights Reserved by Chong Lap | 創立香港有限公司 Terms & Conditions</small>
      </div>
    </footer>
  );
};