"use client";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { LoginButton } from "@/components/auth/login-button";
import Categories, { MobileCategories } from "./Categories";


export default function Navbar() {
  const { handleCartClick } = useShoppingCart();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setIsOpenLoginModal(false);
  };

  return (
    <>
      <header className="border-b border-gray-200 w-full">
        <div className="flex items-center px-4 justify-between mx-auto py-3 sm:px-6 lg:max-w-7xl sm:w-full">
          <Link href="/">
            <h1 className="text-xl md:text-3xl font-bold">
              Bee-<span className="text-primary">Commerce</span>
            </h1>
          </Link>

          <div className="flex items-center gap-x-5">
            <div className="hidden md:flex">
              <SearchBar className="flex" />
            </div>

            {/* Login Button */}
            <LoginButton>
              <Button className="text-secondary hover:bg-primary/80">
                Login
              </Button>
            </LoginButton>

            {/* Cart Icon */}
            <div className="flex items-center gap-x-2 cursor-pointer">
              <MdOutlineShoppingCart className="text-3xl text-gray-500" />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </div>
          </div>
        </div>

        {/* SearchBar for mobile (small devices) */}
        <div className="md:hidden px-4 py-3">
          <SearchBar className="w-full" />
        </div>
      </header>
      <div className="hidden md:flex">
        <Categories />
      </div>

      <div className=" flex md:hidden">
        <MobileCategories />
      </div>


    </>
  );
}
