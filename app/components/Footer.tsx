import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border bg-gray-600 absolute w-full">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className=" mt-2 text-xl md:text-3xl font-bold text-white">
            Bee-<span className="text-primary">Commerce</span>
          </h1>
        </Link>
        <h4 className="font-semibold py-6 ">Contact</h4>
        <div className="flex flex-wrap items-center justify-between  text-white">
          <div className="">
            <p>You Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">beecodes</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">123-345-567</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">beecodes</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of Service</p>
            <p>Customer Assistance</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Dinning Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-light h-10 md:h-[50px] w-full bottom-0 left-0" />
    </footer>
  );
};

export default Footer;
