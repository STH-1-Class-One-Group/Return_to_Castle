/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Castle, 
  Search, 
  ChevronDown, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  XCircle, 
  Globe, 
  Share2,
  Crosshair,
  Zap,
  EyeOff
} from "lucide-react";

const IMAGES = {
  HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYMGa_aW-Psq4Y9q8CMenF2sej9QfskEPOF70lE4QRPBdl0knoX4wNLD3uNDdEoGb75vLudTS4EtsAxeM9Sdz0h2x9luo3KYp-LM3eSLlmM8EZqmHQh5kMAJyvBO0Mc8gRMAII6YnbwhpOek1wPHaXL8ibI2DGXR21iGxk4O6hcHVd6WjEbZtbAloVNAVts8qsXNllyOn3U0OVU0gW4Sy4dToj3vz-pzxOLak5l6SfH8uUVDPcdNQyKxqe0b4Qq9SrQAymahbvj7s",
  LAB: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlTbne3g5tqb0sb5jfXGY56HwEyzrXZjNYm5gWkBZ0zeMMv0qxto8uN-0EnONLkHmAIGwyvOUE47jG4nbkwT3U4qE-QMil8Y6Ixg0gLunTPaT39Yet35Y0_eilLciNjQGFZ1VcBOnYG7OgVbPmhCVCjf5rPaiibAEdDxEQN7uUUm5E1Ctf0EcImViRqi1SiQuZbaigeV9WJH6qZPC1Xsu3uDhXQ4BbIaSkGSi8Bt9E7x2qTDmjni_cFXsP2QPnIEevqPuGj7PG_o",
  ENEMY: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5XzwwydD739fN7YVZCA3sZKze0qZzEf7Yb8DZf9puCRlAiv8NPvfZI12U66d6fXmx4L4DxqUSKo3xpn6L_J_ujeQO750gb2tGREtfw4a1mrBD-hw2Z_ISV1ObPzDUxLWIhg3hSE_lLs855ulSqVcP85BjOEir9nSolk30BS-pPp7TUPh5f3m7bZvz6MN7pxoMPEwT13Fma870nlbhKV3E7scRPD2kKCaA9zRfnHydsyLKIXq_l49tKNSbrI9_JwCiagqWwcvj2lA",
  MP40: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWeudEU_dx7haAUHkpWT3WfmYXJLudgvYo5I4Y3hD7b6Ci8hmeB_OcwBX_ggVSqHUSx5-KlVboQjuLDqEoaBC9YEuYialOOI5WXlNjQrKhKeSy9VGrjbcPjF1z9zUACJ9n7bB3IqKFBe39bnaSruZ5dNUjhgvS0l1hSx2DBxTr3yNYaLbnzGCVGoqp09OyKEHNhvw3eJkkBIXUaG2a_23S9-YbINwbRRvFQtwTB5nCuX37Wvu-dkRCC_IYlpSFyRKyI5Dc4l7uuo8",
  TESLA: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlEIGXJuVcCGiVHhpXxrS4mZonfZqq9iukQSredjRzs-1OICzbtv3EpefinpFzdaOtHqSDrsN0KtYba6ghLLkbWPkM61s8-2tXGFBU0eJX3uj9o00KgyoXssuOHVTuQesNaLyd0kvRkFm1-St2P8D3rm0mqhgDG6hhAeDkJLeVgO2mxlgsVRbkLCGMFxRTxcNMyqWipRLM2tD51CPs_gtNF4CcdPednfrTIB94wiLcbwzg11yPgJerOILYOGwjumN8_QVMnIBKIA",
  MAUSER: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLTTgg_LUmO2e-Z4qjXobnIaK1x2tY465_m2mGFliK2M1I4_-uM4r0089ZVNXbVYBrBuYLnu42mE3qrfxi65jGUrgyUgjVQUSySAjLVkQK3rpCgGBIxTEiWkGP60Ncrt2tnzTUrIWGGvJkAIYwriJCqZw5MQEe1LTkU_M8Sq9vw1mPL-PzTvC8rrlO-8v7oMBq8bkOhL2VImeEzlf4nBOuvWjxJ_ctqJspBqA_H0t3UGVkzrodkfJXttfmGwaOSTPUlNaXJYbU46I",
  GALLERY_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkex-uK0PdqZBWizaG9uMUThHg79XtkxlC5gLH9gIvAB1jLymeg3f9WE2nEuWcNIde-ZlfHID_PJ7uyIl4-7ns7GHsCmEYgzdNCvYu38TwfnhJMlLaR4c2A-EiiTa5SiXuqrHfAm_LgcpV72RdIYcDzvh36SXtoDavJ_QMG2gfoyI2pUIrjGIPsU_ad6vw0VZon3zz7COoGqSDs_uCFpWT0YlzNUAOreN8-tF6rESM1lHUqjWwU8ADuMjw1f_d5ZtJS6nE1jyxxCM",
  GALLERY_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl4bofxMm9Qg24dvl8jmKxCdSwW7D8fwpJ4kPQqEWDh1-fdaFG7jHkvJ-WCyEGeSqJuY67W1QKydgl50SpKHpCPWZKEOBzkiRu1ReMjIooU4lNrQhbRl7TyVZc0WQPfi5q4w-4ymlGssCp8WCKfE_Wc1XdJuBQD7KXh89ujJnQzmJSZfgsxLxKbp5ZXRJz5sNTSYxDvXe8LXLjmHzU3dV0rVHbvck6LdtbWe5IWfal-hJbylR5raxbb-g-sMNoBHaweCs5OG0SUXM",
  GALLERY_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuoaktnp8sDr2bS6M_AENosQkcjCtVwRPPNyaDWfJJqBe0LJwqd2fXyWdwu-mykPzpJ2HGz8mKiTVoLDCzkqxpyF7m3lc5X2SDf9hXzqsxJrowIq2qTWilGeUkzaRV2UduSRcV0u8S8ksbHKOdNUuhQnUumxbJ5DVQorfz8jJQWgZEhRWVU4ocFGAKYU-4oy-m3m7FtcBXqN5HICkRB9dPpsVZCkRbf0282SrNwwrx5nPCctIY9tLMqc5rPbSiANitVlqeqPgZbu4",
  GALLERY_4: "https://lh3.googleusercontent.com/aida-public/AB6AXuChPcnStYRKmQvgNcT0JcGjp6M2DoXVZXjmejbSRY90dbg0xSxWaGgeBqAXxugeQKDnNFs8jJm12xwAOLoqM6OXi_DDXMHuGg_v_yzbft9TGSdUPc8iymXz7zAQ1jQqRsgbVndnMJAMAs9HQsWu25-MoP0W9lf564R4L2aFwugivHJPe3Z9KalvBRZF-KK5m414Pu5OGYGCaTZhFgrmfgOJU4mexJfO4VfEWYuAFmTD4Q2iN9JbN8Gn6GD9K6Sw4_Djm450-oc-zdM"
};

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded">
                <Castle className="text-white size-6" />
              </div>
              <h2 className="text-xl font-display font-bold tracking-tight text-white">
                RTCW<span className="text-primary">ARCHIVE</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-8 sans-font text-[13px] font-medium tracking-wider uppercase opacity-80">
              <a className="hover:text-primary transition-colors" href="#overview">Overview</a>
              <a className="hover:text-primary transition-colors" href="#gameplay">Gameplay</a>
              <a className="hover:text-primary transition-colors" href="#armory">Armory</a>
              <a className="hover:text-primary transition-colors" href="#verdict">Verdict</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-stone-900 rounded-lg px-3 py-1.5 border border-white/5">
              <Search className="text-slate-400 size-4" />
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-48 sans-font ml-2" 
                placeholder="Search Intel..." 
                type="text"
              />
            </div>
            <button className="bg-primary hover:bg-red-700 transition-all text-white px-5 py-2 rounded-lg sans-font text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
              Community Patches
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(18, 12, 12, 0.4), rgba(18, 12, 12, 0.95)), url('${IMAGES.HERO}')` 
          }}
        />
        <div className="absolute inset-0 texture-overlay" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="sans-font text-primary font-bold tracking-[0.3em] uppercase text-sm">Retrospective Review</span>
            <div className="h-px w-12 bg-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-6xl md:text-8xl font-display font-black leading-[1.1] mb-8 drop-shadow-2xl"
          >
            Return to Castle <br/><span className="italic text-primary">Wolfenstein</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="sans-font text-slate-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            A masterpiece of atmospheric dread, blending gritty WWII espionage with high-octane occult horror.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-full sans-font font-bold uppercase tracking-widest text-sm transition-all" href="#review">
              Begin Analysis
            </a>
            <div className="flex items-center gap-4 text-slate-400 sans-font text-sm italic">
              <ShieldCheck className="text-primary size-5" />
              OSS Verified Intel - 1943
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/30 size-10 font-light" />
        </div>
      </header>

      {/* Main Review Content */}
      <main className="max-w-[1100px] mx-auto px-6 py-24" id="review">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Content Column */}
          <article className="lg:col-span-8">
            <div className="mb-12 flex items-center gap-3 sans-font text-xs font-bold text-primary tracking-tighter">
              <span>REVIEWS</span> / <span>CLASSIC FPS</span> / <span>RTCW</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">The Mission: 1943</h2>
            <p className="drop-cap text-xl leading-relaxed text-slate-300 mb-8 font-display italic">
              Deep in the heart of the Reich, a supernatural threat looms. Return to Castle Wolfenstein (2001) redefined the first-person shooter by blending gritty World War II espionage with terrifying occult experiments. This analysis covers the id Tech 3 brilliance that brought Agent B.J. Blazkowicz back to the front lines.
            </p>
            <div className="my-16 relative aspect-video rounded-xl overflow-hidden group shadow-2xl ring-1 ring-white/10">
              <img 
                alt="Wartime environment concept" 
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                src={IMAGES.LAB}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="sans-font text-[10px] font-bold text-primary uppercase bg-background-dark/80 px-2 py-1 inline-block mb-2 rounded">Intel Capture #042</span>
                <p className="text-white font-display italic text-lg">The eerie corridors of the X-Labs, where science meets the supernatural.</p>
              </div>
            </div>
            <h3 className="text-3xl font-display font-bold mb-6 text-white">Technological Marvels</h3>
            <p className="text-lg leading-relaxed text-slate-400 mb-8">
              The use of the id Tech 3 engine allowed Gray Matter Studios to push visual fidelity beyond anything seen in 2001. Dynamic lighting wasn't just a gimmick; it was a core gameplay mechanic in stealth sequences. The clack of a guard's boots on cold stone, the flickering of a torch in a damp dungeon, and the terrifying scream of a Loper in the dark created an unmatched sensory experience.
            </p>
            <blockquote className="border-l-4 border-primary pl-8 my-12 py-2">
              <p className="text-2xl font-display italic text-slate-200">"It wasn't just a shooter; it was a horror game wearing a military uniform."</p>
              <cite className="block mt-4 sans-font text-sm font-bold text-slate-500 uppercase">— Tactical Journal, Issue 14</cite>
            </blockquote>
            <h3 className="text-3xl font-display font-bold mb-6 text-white">Combat & Stealth</h3>
            <p className="text-lg leading-relaxed text-slate-400 mb-8">
              RTCW perfectly balanced its pacing. One moment you're infiltrating an airbase with a silenced Sten submachine gun, and the next you're unloading a Venom Minigun into an Übersoldat. The AI for the time was formidable, with enemies diving for cover and utilizing grenades to flush you out of entrenched positions.
            </p>
          </article>

          {/* Sidebar/Stats Column */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-stone-900 border border-white/5 p-8 rounded-xl">
              <h4 className="sans-font font-bold text-xs text-primary uppercase tracking-[0.2em] mb-6">Mission Details</h4>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="sans-font text-sm text-slate-500">Developer</span>
                  <span className="text-white font-display font-bold">Gray Matter / id</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="sans-font text-sm text-slate-500">Release Date</span>
                  <span className="text-white font-display font-bold">Nov 19, 2001</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="sans-font text-sm text-slate-500">Engine</span>
                  <span className="text-white font-display font-bold">id Tech 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="sans-font text-sm text-slate-500">Platform</span>
                  <span className="text-white font-display font-bold">PC / Console</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="sans-font font-bold text-xs text-primary uppercase tracking-[0.2em]">Enemy Intel</h4>
              <div className="group relative overflow-hidden rounded-xl border border-white/10 aspect-square">
                <img 
                  alt="Enemy silhouette" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" 
                  src={IMAGES.ENEMY}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="sans-font text-[10px] font-bold text-primary mb-1">THREAT LEVEL: CRITICAL</p>
                  <h5 className="text-xl font-display font-bold text-white uppercase italic">The Übersoldat</h5>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* The Armory Grid */}
      <section className="bg-stone-950 py-24 relative overflow-hidden" id="armory">
        <div className="absolute inset-0 texture-overlay" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-display font-bold text-white mb-4 italic">The Armory</h2>
              <p className="sans-font text-slate-400 max-w-xl">A selection of experimental and standard-issue weaponry utilized in the 1943 campaign.</p>
            </div>
            <div className="h-px flex-1 mx-12 bg-white/10 hidden md:block mb-4" />
            <button className="sans-font text-primary text-xs font-bold uppercase tracking-widest border border-primary/40 px-6 py-3 rounded hover:bg-primary hover:text-white transition-all">View All Systems</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Weapon Card 1 */}
            <div className="bg-stone-900/50 border border-white/5 rounded-xl p-8 hover:border-primary/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="sans-font text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">MG-040</span>
                <Crosshair className="text-primary size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-32 mb-8 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <img 
                  alt="Weapon silhouette" 
                  className="h-full object-contain grayscale" 
                  src={IMAGES.MP40}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-2 italic">MP40 Submachine Gun</h4>
              <p className="sans-font text-xs text-slate-500 leading-relaxed mb-6">Standard issue. High rate of fire, reliable in close quarters engagement.</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
                <span className="sans-font text-[10px] text-slate-400 font-bold uppercase">Lethality</span>
              </div>
            </div>

            {/* Weapon Card 2 */}
            <div className="bg-stone-900/50 border border-white/5 rounded-xl p-8 hover:border-primary/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="sans-font text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">X-WPN-09</span>
                <Zap className="text-primary size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-32 mb-8 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <img 
                  alt="Weapon silhouette" 
                  className="h-full object-contain grayscale" 
                  src={IMAGES.TESLA}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-2 italic">Tesla Gun</h4>
              <p className="sans-font text-xs text-slate-500 leading-relaxed mb-6">Prototype electrical discharger. Effective against multiple occult targets.</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full" />
                </div>
                <span className="sans-font text-[10px] text-slate-400 font-bold uppercase">Lethality</span>
              </div>
            </div>

            {/* Weapon Card 3 */}
            <div className="bg-stone-900/50 border border-white/5 rounded-xl p-8 hover:border-primary/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="sans-font text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">HE-001</span>
                <EyeOff className="text-primary size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-32 mb-8 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <img 
                  alt="Weapon silhouette" 
                  className="h-full object-contain grayscale" 
                  src={IMAGES.MAUSER}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-2 italic">Mauser Rifle</h4>
              <p className="sans-font text-xs text-slate-500 leading-relaxed mb-6">Long-range precision with optional optics for tactical infiltration.</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2" />
                </div>
                <span className="sans-font text-[10px] text-slate-400 font-bold uppercase">Lethality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6" id="verdict">
        <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* The Score */}
            <div className="md:col-span-4 bg-primary p-12 flex flex-col items-center justify-center text-center">
              <span className="sans-font text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Tactical Grade</span>
              <div className="relative">
                <span className="text-[120px] font-display font-black text-white leading-none">9.0</span>
                <span className="absolute -right-8 top-4 text-white/40 text-2xl font-bold italic sans-font">/10</span>
              </div>
              <div className="mt-8 flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="text-white fill-current size-6" />
                ))}
                <Star className="text-white size-6" />
              </div>
              <p className="mt-8 sans-font font-bold text-white text-sm uppercase tracking-tighter">Superior Performance</p>
            </div>
            {/* Pros and Cons */}
            <div className="md:col-span-8 p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="sans-font font-bold text-xs text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 size-4" />
                  Tactical Advantages
                </h4>
                <ul className="space-y-4">
                  {[
                    "Atmospheric lighting and sound design that holds up decades later.",
                    "Perfect blend of historical realism and supernatural horror.",
                    "Revolutionary multiplayer (Enemy Territory) foundation."
                  ].map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="sans-font text-sm text-slate-300 font-medium leading-relaxed">{pro}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="sans-font font-bold text-xs text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <XCircle className="text-red-500 size-4" />
                  Intelligence Flaws
                </h4>
                <ul className="space-y-4">
                  {[
                    "Difficulty spikes in late-game boss encounters.",
                    "Stealth mechanics can occasionally feel scripted."
                  ].map((con, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-700 mt-2 flex-shrink-0" />
                      <p className="sans-font text-sm text-slate-400 leading-relaxed">{con}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multimedia Gallery */}
      <section className="pb-24 max-w-[1200px] mx-auto px-6">
        <h3 className="sans-font text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Mission Intel: Field Photography</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group">
            <img 
              alt="Gallery image" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={IMAGES.GALLERY_1}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="rounded-xl overflow-hidden group">
            <img 
              alt="Gallery image" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={IMAGES.GALLERY_2}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="rounded-xl overflow-hidden group">
            <img 
              alt="Gallery image" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={IMAGES.GALLERY_3}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden group">
            <img 
              alt="Gallery image" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={IMAGES.GALLERY_4}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-white/5 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded">
                <Castle className="text-primary size-8" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-white">RTCW<span className="text-primary">ARCHIVE</span></h2>
                <p className="sans-font text-[10px] text-slate-500 uppercase font-bold tracking-widest">Preserving 1943 since 2001</p>
              </div>
            </div>
            <div className="flex gap-12 text-slate-500 sans-font text-xs font-bold uppercase tracking-widest">
              <a className="hover:text-primary transition-colors" href="#">Historical Logs</a>
              <a className="hover:text-primary transition-colors" href="#">Community Hub</a>
              <a className="hover:text-primary transition-colors" href="#">Intel Reports</a>
            </div>
            <div className="flex gap-4">
              <button className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors">
                <Globe className="text-white size-5" />
              </button>
              <button className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors">
                <Share2 className="text-white size-5" />
              </button>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-600 sans-font text-[10px] uppercase tracking-[0.4em]">
            © 1943 - 2024 OSS ARCHIVE RECORD. ALL RIGHTS REDACTED.
          </div>
        </div>
      </footer>
    </div>
  );
}
