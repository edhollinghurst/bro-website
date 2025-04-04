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
            <a
              href="https://www.dalmahoyhotelandcountryclub.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Dalmahoy Hotel & Country Club
            </a>
          </p>
          <div className="space-y-8">
            <div className="space-y-4">
              <a
                href="https://sportas.page.link/vkj1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300"
              >
                Sign Up & Pay Deposit
              </a>
              <p className="text-white text-sm">
                After payment, please email{" "}
                <a href="mailto:brogolfuk@gmail.com" className="underline">
                  brogolfuk@gmail.com
                </a>{" "}
                to confirm your room preference
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
