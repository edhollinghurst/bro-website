import Image from "next/image";

export default function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-wider mb-6">
              The Venue
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                Join us at the prestigious Dalmahoy Hotel & Country Club, a
                stunning resort that combines Scottish heritage with modern
                luxury. Located just outside Edinburgh, this magnificent venue
                provides the perfect setting for the inaugural British Rainbow
                Open.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Package Includes:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>3 Nights Accommodation with Breakfast</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>3 Rounds of Golf</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>2 Hotel Dinners + Closing Dinner in Edinburgh</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Welcome Drink & Practice Range Tokens</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Tournament Merchandise & Prizes</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold uppercase tracking-wide text-blue-600">
                  Pricing
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold uppercase">Twin Sharing</p>
                    <p className="text-2xl font-extrabold">£728</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase">Single</p>
                    <p className="text-2xl font-extrabold">£932</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
            <Image
              src="https://www.dalmahoyhotelandcountryclub.co.uk/media/3824/dalmahoy-golf-3.jpg"
              alt="Dalmahoy Hotel & Country Club Golf Course"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
