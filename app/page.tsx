import About from "./components/About";
import Competition from "./components/Competition";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Location />
        <Competition />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}
