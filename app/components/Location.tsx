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
                Join us at the prestigious Dalmahoy Hotel & Country Club, just
                outside Edinburgh. We're combining great golf, great courses, a
                great hotel, great people and most importantly, a unique
                experience that celebrates our community.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Package Includes:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>3 Rounds at Dalmahoy Golf Course</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Daily Breakfast & Dinner</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Final Dinner in Edinburgh at Merchants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Welcome Drink & 3 Range Tokens</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Tournament Prizes & Edinburgh Transfers</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold uppercase tracking-wide text-blue-600">
                  Early Bird Rates
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Book before 25th March 2025
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold uppercase">Twin Sharing</p>
                    <p className="text-2xl font-extrabold">£728</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase">Single Room</p>
                    <p className="text-2xl font-extrabold">£932</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-bold uppercase mb-2">Payment Schedule:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• £90 deposit before 25th March 2025</li>
                    <li>• Final balance due 1st August 2025</li>
                    <li>• Payments via Sportas app</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
            <Image
              src="/dalmahoy-golf-3.jpg"
              alt="Scottish Golf Resort"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
