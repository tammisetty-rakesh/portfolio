import { RevealOnScroll } from "../RevealOnScroll";
import resume from "../../assets/RakeshTammisetty.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Rakesh Tammisetty
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a web developer, I specialize in creating dynamic and responsive
            web applications using React.js, JavaScript, HTML, CSS, and Tailwind
            CSS. I also integrate WordPress as a headless CMS to facilitate
            seamless content management. This combination of technologies allows
            me to deliver efficient, user-friendly, and easily maintainable web
            solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={resume}
              download="RakeshTammisetty.pdf"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              My Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
