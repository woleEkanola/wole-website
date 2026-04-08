import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Code, Cpu, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-indigo-100">
      
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tighter text-gray-900 font-signature">
            Wole Ekanola
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#ventures" className="hover:text-gray-900 transition-colors">Ventures</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <button className="hidden md:block px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
            Let's Talk
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32">
        
        {/* HERO SECTION - SPLIT LAYOUT */}
        <section id="about" className="min-h-[85vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold tracking-wide">
              Natural Builder • Founder • Author
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
              Shaping <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
                Africa's Future.
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
              I am a prolific founder powering Africa's transformation through technology, education, and youth empowerment. From Lagos, Nigeria, I scale innovative ventures that serve thousands, drawing on deep corporate expertise to deliver real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all">
                Partner With Me <ArrowUpRight size={18} />
              </a>
              <div className="flex items-center gap-6 px-4 text-sm font-bold text-gray-400">
                <a href="https://linkedin.com/in/woleekanola" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors tracking-wide">
                  LINKEDIN
                </a>
                <a href="https://instagram.com/woleekanola" target="_blank" rel="noreferrer" className="hover:text-[#E4405F] transition-colors tracking-wide">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full lg:h-[700px] rounded-3xl overflow-hidden relative shadow-2xl"
          >
            {/* PLACEHOLDER: Replace this src with a high-quality professional portrait of you */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="Wole Ekanola" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </section>

        {/* VENTURES - BENTO GRID LAYOUT */}
        <section id="ventures" className="py-32 border-t border-gray-100">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Visionary Ventures</h2>
            <p className="text-xl text-gray-500 max-w-2xl">Bridging enterprise-scale execution with entrepreneurial innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* BENTO ITEM 1: Schoolwave (Spans 2 columns) */}
            <div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-gray-900 text-white p-10 flex flex-col justify-end transition-transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Schoolwave Platform" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Schoolwave</h3>
                <p className="text-gray-300 max-w-md text-lg">Equipping 20+ schools with digital infrastructure for payments, administration, and scalable learning—now powering 5,000+ users.</p>
              </div>
            </div>

            {/* BENTO ITEM 2: Techill Academy */}
            <div className="bg-indigo-600 rounded-3xl p-8 text-white flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Techill Academy</h3>
                <p className="text-indigo-100 leading-relaxed">Transforming beginners into job-ready software engineers and AI professionals through hands-on mentorship.</p>
              </div>
            </div>

            {/* BENTO ITEM 3: AI & Corporate Automation */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI & Automation</h3>
                <p className="text-gray-500 leading-relaxed">Helping business owners automate operations and slash costs with emerging AI tools and custom systems.</p>
              </div>
            </div>

            {/* BENTO ITEM 4: Youth Empowerment (Spans 2 columns) */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden bg-gray-100 flex items-center transition-transform hover:-translate-y-1">
               <img 
                src="https://images.unsplash.com/photo-1475721025505-c31bc1622312?auto=format&fit=crop&q=80&w=1000" 
                alt="Youth Empowerment" 
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
              <div className="relative z-10 p-10">
                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Empowering the Next Generation</h3>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Author of <span className="font-semibold italic">"What Is In Your Hands"</span>. Pioneer of the Teenage Accelerator Program and convener of the Lagos Kids Tech Festival—teaching life readiness skills like clarity, discipline, and purpose.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA / CONTACT SECTION */}
        <section id="contact" className="py-24 text-center border-t border-gray-100">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">Ready to Build Systems That Last?</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Partner on AI automation, join a program, or collaborate to elevate your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://linkedin.com/in/woleekanola" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#0A66C2] text-white rounded-full font-semibold hover:bg-[#084e96] transition-all flex items-center justify-center gap-2">
              Connect on LinkedIn <ArrowUpRight size={18} />
            </a>
            <a href="mailto:hello@woleekanola.com" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all">
              Send an Email
            </a>
          </div>
        </section>
        
      </main>
    </div>
  );
}