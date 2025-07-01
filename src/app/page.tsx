export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#0a0f0a] text-white font-sans">
      {/* Animated Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-green-400 opacity-30 blur-[160px] mix-blend-screen pointer-events-none animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-lime-400 opacity-20 blur-[160px] mix-blend-screen pointer-events-none animate-blob animation-delay-[6s]" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.08] mix-blend-soft-light bg-[url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGD4DwABBAEAeHnFYgAAAABJRU5ErkJggg==')] bg-repeat" />

      {/* Content */}
      <section className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-green-300 via-lime-400 to-green-600 text-transparent bg-clip-text drop-shadow-lg">
          Miznet
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-300 max-w-xl font-medium">
          AI-Powered Web3 Project Showcase. Identity, Verification & Blockchain Innovation.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full bg-green-600/90 hover:bg-green-500 transition font-semibold backdrop-blur-md shadow-xl text-white">
          View Projects
        </button>
      </section>
    </main>
  );
}
