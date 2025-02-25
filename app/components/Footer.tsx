import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p>&copy; 2025 British Rainbow Open</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="https://www.instagram.com/brogolfuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors bg-blue-600 px-4 py-2 rounded-full"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow @brogolfuk</span>
            </a>
            <a href="mailto:brogolfuk@gmail.com" className="hover:underline">
              brogolfuk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
