import CartProviders from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppinCartModal from "./components/ShoppinCartModal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProviders>
      <Navbar />
      <ShoppinCartModal />
      {children}
    </CartProviders>
  );
}
