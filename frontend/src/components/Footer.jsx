const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-3 md:mb-0">
          &copy; 2025 Game Catalog. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <div>
            <h5 className="font-bold">Muhammad Rifqi Dwi Putra</h5>
            <a
              href="https://twitter.com/yourprofile"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
            <br />
            <a
              href="https://github.com/yourprofile"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div>
            <h5 className="font-bold">Muhammad Sanusi Amir Bayquni</h5>
            <a
              href="https://twitter.com/friendsprofile"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
            <br />
            <a
              href="https://github.com/friendsprofile"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
