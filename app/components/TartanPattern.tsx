export default function TartanPattern() {
  return (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(90deg, transparent 49%, #000 49%, #000 51%, transparent 51%),
          linear-gradient(0deg, transparent 49%, #000 49%, #000 51%, transparent 51%)`,
        backgroundSize: "50px 50px",
      }}
    />
  )
}

