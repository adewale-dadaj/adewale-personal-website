import Image from "next/image";

export default function Home() {

  const projects = [
    {title: "Habit Tracker App", description: "Simple Habit Tracker with Github-style visualization.", tech: ["Swift", "Django"]},
    {title: "(TBD) API", description: "Backend logic.", tech: ["Django"]},
  ];
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      {/* 1. Content Wrapper: 'flex-grow' pushes the footer to the bottom of the page */}
      <div className="flex-grow p-8">

      {/* --- Hero Section --- */}
      <section className="flex flex-col items-center justify-center py-32 text-center">
        {/* The below className will add a background gradient to the entire section. bg-clip-text will have the gradient only adhere to the text in this section. text-transparent will then make the color of the text transparent allowing the bg gradient to show. */}
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Hi, I'm Adewale Dada
        </h1>

        <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
          I am a Full-Stack Software Engineer. Welcome to my engineering portfolio.
        </p>

        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
          View My Work
        </button>

      </section>

      {/* --- Project Grid --- */}
      <section className="mx=auto py-20">
        <h2 className="text-3xl font-bold mb-12 border-b border-slate-700 pb-4">Feautred Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="'text-slate-4-- mb-4">{project.description}</p>
            </div>
          ))}
        </div>
       </section>
      </div>

      {/* --- Footer Section --- */}
      {/* 'w-full stretches across the screen. 'bg-slate-950' is slightly darker than the main bg. */}
      <footer className="w-full bg-slate-950 border-t border-slate-800 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          {/* ---Copyright Text --- */}
          <p className="text-slate-500 text-sm">
            &#169; 2026 Adewal J Dada Built with Next.js and Tailwind CSS.
          </p>

          {/* --- Social Links --- */}
          <div className="flex gap-8">
            {/* 'hover:text-blue-400' makes the link glow blow when you mouse over it */}
            <a href="https://github.com/adewale-dadaj" className="text-slate-400 hover:text-blue-400 transition-colors">
            Github
            </a>
            <a href="https://linkedin.com/in/adewale-j-dada" className="text-slate-400 hover:text-blue-400 transition-colors">
            Linkedin
            </a>
            <a href="mailto:adewale.dadaj@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
            email
            </a>
          </div>

        </div>
      </footer>
    </main>
  );
}
