import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto bg-black">
      <div className="text-center border-t py-8">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Chong Lap | 創立香港有限公司 Terms & Conditions</p>
      </div>
    </footer>
  );
};