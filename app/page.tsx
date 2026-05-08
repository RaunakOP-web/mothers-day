import FloatingPetals from "@/components/FloatingPetals";
import MusicToggle from "@/components/MusicToggle";
import PhotoGallery from "@/components/PhotoGallery";
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-champagne selection:text-text-dark flex flex-col items-center w-full overflow-hidden">
      <FloatingPetals />
      <MusicToggle />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 w-full max-w-7xl">
        <div className="z-10 text-center space-y-8 animate-[fadeInUp_1.5s_ease-out]">
          <h2 className="font-montserrat text-gold-dark tracking-[0.2em] text-sm md:text-base uppercase">
            A Celebration of You
          </h2>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-text-dark font-medium leading-tight">
            Happy Mother&apos;s Day,<br />
            <span className="font-dancing text-6xl md:text-8xl lg:text-9xl shimmer-text inline-block mt-4">Jaspreet</span>
          </h1>
          
          {/* Floating Heart Animation */}
          <div className="pt-12 text-rose text-4xl heartbeat inline-block drop-shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 floating">
            <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 py-16 md:py-24 px-4 w-full max-w-7xl flex flex-col items-center bg-gradient-to-b from-transparent via-white/30 to-cream">
        
        <QuoteCard 
          quote="A mother is she who can take the place of all others but whose place no one else can take." 
        />

        <div className="w-full my-24 md:my-32 flex flex-col items-center">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-4xl md:text-5xl text-brown italic drop-shadow-sm">Precious Memories</h3>
            <div className="w-24 h-px bg-gold mx-auto mt-6"></div>
          </div>
          <PhotoGallery />
        </div>

        <QuoteCard 
          quote="Home is wherever you are." 
        />

        <div className="h-32 md:h-48"></div>

      </section>

      {/* Footer Section */}
      <footer className="relative z-10 pb-24 pt-32 px-4 text-center">
        <div className="max-w-2xl mx-auto border-t border-gold-light/40 pt-16 mt-16 flex flex-col items-center justify-center gap-8">
          <p className="font-dancing text-5xl md:text-7xl text-text-dark leading-normal pt-4">
            I love you, Mom. Always.
          </p>
          <p className="font-montserrat text-text-light text-sm md:text-base tracking-widest uppercase">
            Happy Mother&apos;s Day 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
