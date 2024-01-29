import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function MarketingLayout({ children }) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
