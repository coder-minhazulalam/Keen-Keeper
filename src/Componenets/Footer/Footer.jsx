
const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-10 ">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            KeenKeeper
          </h1>

          <p className="text-gray-300 mt-4 text-sm max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend,
            and nurture the relationships that matter most.
          </p>

          <div className="mt-8">

            <h3 className="font-semibold mb-4">
              Social Links
            </h3>

            <div className="flex justify-center gap-4">

              <a
                href="#"
                className="bg-white text-[#244D3F] p-3 rounded-full hover:scale-110 duration-300"
              >
              <img src="/public/assets/facebook.png"/>
              </a>

              <a
                href="#"
                className="bg-white text-[#244D3F] p-3 rounded-full hover:scale-110 duration-300"
              >
              <img src="/public/assets/twitter.png"/>
              </a>

              <a
                href="#"
                className="bg-white text-[#244D3F] p-3 rounded-full hover:scale-110 duration-300"
              >
              <img src="/public/assets/instagram.png"/>
              </a>

            </div>

          </div>
        </div>

        <div className="border-t border-white/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">

          <p>
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#" className="hover:text-white duration-300">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white duration-300">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white duration-300">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;