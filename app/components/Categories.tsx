"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { name: "Electronics", href: "/Electronics"  },
  { name: "Home & Kitchen", href: "/HomeAndKitchen" },
  { name: "Kids & Toys", href: "/KidsAndToys" },
  { name: "Beauty & Personal Care", href: "/BeautyAndPersonal" },
  { name: "Fashion", href: "/Fashion" },

];

export default function Categories() {
  const pathName = usePathname();
  return (
    <header className=" w-full bg-orange-600 py-4 ">
      <div className="sm:px-6 lg:max-w-7xl sm:w-full relative">
        <div className="flex items-center px-4 justify-between mx-auto py-1 sm:px-6 lg:max-w-7xl sm:w-full">
          {links.map((link, index) => (
            <div key={index}>
              {pathName === link.href ? (
                <Link className="text-sm font-semibold" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-sm font-semibold hover:text-primary  text-white transition duration-100"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
import { FaTv, FaHome, FaChild, FaHeartbeat, FaTshirt } from "react-icons/fa";

const mobilelinks = [
  { name: "Electronics", href: "/Electronics", icon: FaTv },
  { name: "Home", href: "/HomeAndKitchen", icon: FaHome },
  { name: "Kiddies", href: "/KidsAndToys", icon: FaChild },
  {
    name: "Beauty",
    href: "/BeautyAndPersonal",
    icon: FaHeartbeat,
  },
  { name: "Fashion", href: "/Fashion", icon: FaTshirt },
];

export function MobileCategories() {
  const pathName = usePathname();

  return (
    <header className="w-full bg-orange-600 py-2 lg:py-4">
      <div className="sm:px-6 lg:max-w-7xl sm:w-full relative">
        <div className="flex w-full justify-between px-4 mx-auto py-1 sm:px-6 lg:max-w-7xl sm:w-full">
          {mobilelinks.map((link, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link href={link.href}>
                <div className="flex flex-col items-center justify-center">
                  <link.icon
                    size={15}
                    className={`${
                      pathName === link.href ? "text-primary" : "text-white"
                    } mb-2 transition duration-200 hover:text-primary`}
                  />
                  <span
                    className={`text-xs ${
                      pathName === link.href ? "text-primary" : "text-white"
                    } transition duration-200 hover:text-primary`}
                  >
                    {link.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}



