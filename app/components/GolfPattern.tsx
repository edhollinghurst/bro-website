export default function GolfPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 border-4 border-white rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-10 h-10 border-4 border-white rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/2 w-6 h-6 border-4 border-white rounded-full"></div>
    </div>
  )
}

