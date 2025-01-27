import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondaryBgColor text-white py-[40px]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-2 lg:grid-cols-[40%_2fr_20%] gap-[60px] md:gap-8">
        <div className="block md:hidden">{ContactUsColumn()}</div>

        {AboutUsColumn()}

        <div className="grid grid-cols-2">
          {SocialColumn()}
          {CustomCareColumn()}
        </div>

        <div className="md:block hidden">{ContactUsColumn()}</div>
      </div>
      <div className="container mt-[80px] items-start md:items-center flex flex-col md:flex-row gap-[10px] md:gap-[40px]">
        <p className="md:block hidden text-mainBlack text-sm">
          © 2025 Gobi Cashmere. All rights reserved
        </p>

        <div className="w-[1px] h-5 bg-mainBlack md:block hidden"></div>

        <p className=" text-mainBlack text-sm underline-on-hover">
          Terms & Conditions
        </p>
        <p className=" text-mainBlack text-sm underline-on-hover">
          Shipping & Return Policy
        </p>
        <p className=" text-mainBlack text-sm underline-on-hover">
          Privacy Policy
        </p>
        <p className=" text-mainBlack text-sm underline-on-hover">Affiliate</p>

        <p className="md:hidden block text-mainBlack text-sm">
          © 2025 Gobi Cashmere. All rights reserved
        </p>
      </div>
    </div>
  );
};

const AboutUsColumn = () => {
  return (
    <div>
      <div className="max-w-[500px]">
        <h3 className="font-medium mb-4 text-[12px] text-black">About Us</h3>
        <p className="text-mainBlack">
          Gobi Cashmere is... lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Duis vestibulum enim vel dapibus commodo. Suspendisse nec
          pharetra metus.{" "}
          <span className="underline">
            <Link href={"/"}>Learn More</Link>
          </span>
        </p>
      </div>

      <div className="flex items-center gap-[15px] mt-[60px]">
        <Image src={"/icons/location.svg"} width={18} height={18} alt="" />

        <div className="flex flex-col">
          <p className="text[12px]">Country</p>
          <p className="md:text[14px]">United States [EN]</p>
        </div>
      </div>
    </div>
  );
};

const ContactUsColumn = () => {
  return (
    <div>
      <h3 className="font-medium mb-4 text-[12px] text-black">
        Let's keep in touch!
      </h3>
      <p className="text-mainBlack mb-4">
        Get glowing with our latest products and exclusive events.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="text-mainBlack border-b-[1px] border-mainBlack bg-secondaryBgColor px-4 py-2 flex-1 focus:outline focus:outline-2 focus:outline-mainBlack placeholder-mainBlack"
        />
      </div>
    </div>
  );
};

const SocialColumn = () => {
  return (
    <div className="">
      <h3 className="font-medium mb-4 text-[12px] text-black">Follow</h3>
      <ul className="">
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Facebook
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            YouTube
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Twitter
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Instagram
          </Link>
        </li>
      </ul>
    </div>
  );
};
const CustomCareColumn = () => {
  return (
    <div className="">
      <h3 className="font-medium mb-4 text-[12px] text-black">Customer Care</h3>
      <ul className="">
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Support Center
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Cashmere Care
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Store Location
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Return Portal
          </Link>
        </li>
        <li>
          <Link href="#" className="text-mainBlack underline-on-hover">
            Rewards Program
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
