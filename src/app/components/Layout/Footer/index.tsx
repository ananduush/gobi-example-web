import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondaryBgColor text-white py-[40px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-2 lg:grid-cols-[40%_2fr_20%] gap-[60px] md:gap-8">
        <div className="block md:hidden">{ContactUsColumn()}</div>

        <div className="max-w-[500px]">
          <h3 className="font-medium mb-4 text-[12px] text-black">About Us</h3>
          <p className="text-mainBlack">
            Gobi Cashmere is... lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis vestibulum enim vel dapibus commodo.
            Suspendisse nec pharetra metus.{" "}
            <span className="underline">
              <Link href={"/"}>Learn More</Link>
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2">
          {SocialColumn()}
          {CustomCareColumn()}
        </div>

        <div className="md:block hidden">{ContactUsColumn()}</div>
      </div>
      <div className="mt-8 text-center text-mainBlack text-sm">
        © 2025 Gobi Cashmere. All rights reserved.
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
