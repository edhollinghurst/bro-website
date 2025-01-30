import Image from "next/image"

export default function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Experience Scotland</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Join us in Scotland, the birthplace of golf, for this historic tournament. Surrounded by rolling hills,
                ancient castles, and dramatic coastlines, you'll experience golf as it was meant to be played.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>World-famous links courses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Traditional Scottish entertainment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Luxury accommodation</span>
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
              src="https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt1acca636bd57faed/5e7e14289da207172a2c5e6d/Best-Golf-Courses-In-Scotland-Turnberry.jpg"
              alt="Scottish Golf Course - Turnberry"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

