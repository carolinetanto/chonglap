import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <h3 className="text-xl">Important Links</h3>
        <div className="flex items-center justify-center my-4 underline">
          <Link href="https://twitter.com/chonglap" className="px-4">
            Twitter
          </Link>
          <Link href="https://linkedin.com/in/chonglap" className="px-4">
            LinkedIn
          </Link>
        </div>
        <small>Chong Lap &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};