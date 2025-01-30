import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rainbow arc */}
            <path d="M7 28C7 18.0589 15.0589 10 25 10C34.9411 10 43 18.0589 43 28" stroke="#FF0000" strokeWidth="4" />
            <path d="M13 28C13 21.3726 18.3726 16 25 16C31.6274 16 37 21.3726 37 28" stroke="#FF7F00" strokeWidth="4" />
            <path d="M19 28C19 24.6863 21.6863 22 25 22C28.3137 22 31 24.6863 31 28" stroke="#FFFF00" strokeWidth="4" />

            {/* Golf ball */}
            <circle cx="25" cy="28" r="6" fill="white" stroke="#4CAF50" strokeWidth="2" />

            {/* Dimple pattern */}
            <path
              d="M23 26h.01M27 26h.01M22 29h.01M28 29h.01M25 27h.01M24 28h.01M26 28h.01"
              stroke="#4CAF50"
              strokeWidth="1"
            />

            {/* Tee */}
            <path d="M25 34L22 40h6L25 34z" fill="#8B4513" />
          </svg>
          <div className="text-3xl font-extrabold tracking-tighter">
            <span className="text-green-600 transition-transform duration-300 inline-block group-hover:rotate-[-10deg]">
              B
            </span>
            <span className="text-green-600">R</span>
            <span className="text-green-600 transition-transform duration-300 inline-block group-hover:rotate-[10deg]">
              O
            </span>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link href="#sign-up" className="text-gray-600 hover:text-gray-800">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

