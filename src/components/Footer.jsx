/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer className="dark:bg-gradient-to-r from-slate-300 fixed bottom-0 w-full to-slate-800 bg-white text-red-600">
      <div className="container flex justify-between pt-3">
        <div className="basis-3/4 sm:basis-2/4 flex gap-2">
          <a
            // to="/"
            href="#"
            className="text-3xl lg:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-yellow-500 "
          >
            FICO
          </a>
          <p className="text:xl sm:text-2xl pt-1 sm:pt-2 font-bold text-yellow-400 ">
            <span className="hidden lg:inline">
              {new Date().toLocaleDateString()} -{" "}
            </span>
            &copy;CSKN DESIGN
          </p>
        </div>
        <div className="icons flex gap-2 ">
          <a href="#tw">
            {" "}
            <i className="fa-brands hover:text-yellow-400 duration-500 fa-twitter fa-2x"></i>
          </a>
          <a href="#fb">
            <i className="fa-brands hover:text-yellow-400 duration-500 fa-facebook fa-2x"></i>
          </a>
          <a href="#ins">
            <i className="fa-brands hover:text-yellow-400 duration-500 fa-instagram fa-2x"></i>
          </a>
          <a href="#gh">
            <i className="fa-brands hover:text-yellow-400 duration-500 fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
