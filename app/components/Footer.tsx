export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>&copy; 2025 British Rainbow Open</p>
          </div>
          <div>
            <p>
              Contact:{" "}
              <a href="mailto:info@brogolf.co.uk" className="hover:underline">
                info@brogolf.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

