import Image from "next/image";

export default function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Experience Scotland</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Join us in Scotland for this historic tournament. While the
                exact venue is yet to be confirmed, we're planning to host the
                event at a beautiful golf resort in Scotland, showcasing the
                country's stunning landscapes and rich golfing heritage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Stunning Scottish golf resort</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Easy access to Scotland's historic cities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Traditional Scottish entertainment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Scottish cuisine and whisky tasting</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
            <Image
              src="/golf-resort.jpg"
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
