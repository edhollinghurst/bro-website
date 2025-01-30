import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Location from "./components/Location"
import SignUpForm from "./components/SignUpForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Location />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  )
}

