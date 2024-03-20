import Link from "next/link";
import logo2 from "@/assets/images/logo2.png"
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="mx-auto bg-black lg:fixed bottom-0 left-0 right-0 grid grid-rows lg:grid-cols-3 border-t ">
      <div className="logo py-4 px-8 items-center justify-center flex">
        <Image alt="chonglap-logo2" src={logo2} width={150} height={70}/>
      </div>
      <div className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Chong Lap | 創立香港有限公司 Terms & Conditions</p>
      </div>
      .
    </footer>
  );
};