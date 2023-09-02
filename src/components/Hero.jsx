import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col py-5 lg:py-10">
      <nav className="flex justify-between items-center w-full mb-5 lg:mb-10 px-5">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/vikashkhati007");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <div className="text-center px-5">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Summarize Articles with
          <br className="max-md:hidden" />
          <span className="orange_gradient"> OPEN-AI GPT-4 </span>
        </h1>
        <h2 className="text-lg lg:text-xl mt-5 lg:mt-8">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries.
        </h2>
      </div>
    </header>
  );
};

export default Hero;
