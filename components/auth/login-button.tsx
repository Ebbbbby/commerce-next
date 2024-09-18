"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "modal",
  asChild = false,
}: LoginButtonProps) => {

  const router = useRouter();
  const onClick = () => {
    console.log('Login clicked')
    router.push("/auth/login");
  };
  // if (mode === "modal") {
  //   return (
  //     <span>
  //       to do
  //     </span>
  //   )
  // }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
