import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mx-auto bg-black lg:fixed bottom-0 left-0 right-0">
      <div className="text-center border-t py-8">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Chong Lap | 創立香港有限公司 Terms & Conditions</p>
      </div>
    </footer>
  );
};