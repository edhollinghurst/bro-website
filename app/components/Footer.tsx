import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p>&copy; 2025 British Rainbow Open</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/brogolfuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@brogolfuk</span>
            </a>
            <span className="text-gray-400">|</span>
            <a href="mailto:info@brogolf.co.uk" className="hover:underline">
              info@brogolf.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
