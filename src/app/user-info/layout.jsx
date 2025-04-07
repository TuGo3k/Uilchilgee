import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Layout({ children }) {
  return (
    <section className="w-full h-fit flex flex-col bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
