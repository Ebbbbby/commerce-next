import CartProviders from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppinCartModal from "./components/ShoppinCartModal";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

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
      <Footer />
    </CartProviders>
  );
}
