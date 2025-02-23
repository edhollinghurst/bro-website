import TartanPattern from "./TartanPattern";

export default function Hero() {
  return (
    <section className="py-32 text-center bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 relative overflow-hidden">
      <TartanPattern />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider uppercase text-white mb-6">
            British Rainbow Open
          </h1>
          <p className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-white mb-4">
            11-13 September 2025
          </p>
          <p className="text-xl md:text-2xl font-bold tracking-wide uppercase text-white mb-12">
            Dalmahoy Hotel & Country Club
          </p>
          <a
            href="#sign-up"
            className="inline-block bg-blue-600 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Register Interest
          </a>
        </div>
      </div>
    </section>
  );
}
