import { Calendar, Flag, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center uppercase tracking-wider text-gray-800 mb-12">
          About BRO
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Flag className="h-12 w-12 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                Premier Tournament
              </h3>
              <p className="text-gray-600">
                The premier LGBTQ+ inclusive golf tournament in British Golf,
                celebrating diversity and inclusion.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Calendar className="h-12 w-12 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                Three Day Event
              </h3>
              <p className="text-gray-600">
                Join us for three days of golf, socializing, and celebration
                from 11-13 September 2025.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <MapPin className="h-12 w-12 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                Premier Venue
              </h3>
              <p className="text-gray-600">
                Experience the prestigious Dalmahoy Hotel & Country Club, just
                minutes from Edinburgh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
