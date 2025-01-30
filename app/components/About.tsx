import { Flag, Castle, MountainIcon as Mountains } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About BRO</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Flag className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Inaugural LGBTQ+ Golf Tournament</h3>
              <p className="text-gray-600">
                The first major LGBTQ+ inclusive golf tournament in the UK, celebrating diversity in the home of golf.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Castle className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Scottish Venue</h3>
              <p className="text-gray-600">
                Set against the backdrop of Scotland's stunning landscapes and historic golf courses.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Mountains className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Highland Experience</h3>
              <p className="text-gray-600">Combine world-class golf with authentic Scottish culture and hospitality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

