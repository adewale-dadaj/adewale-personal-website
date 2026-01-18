import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-center p-24">
    //   <h1 className="text-5xl font-extrabold tracking-tight">
    //     Adewale's Personal Website & Engineering Portfolio

    //     Next, how to add an "about me" section using Tailwind CSS to make it look professional
    //   </h1>
    // </main>
    <main className="min-h-screen bg-slate-900 text-white">
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
    </main>
  );
}
