const Header = () => (
  <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a className="mr-5 hover:text-white" href="/experiencia_laboral">
          Experiencia Laboral
        </a>
        <a className="mr-5 hover:text-white" href="/antecedentes_academicos">
          Antecedentes académicos
        </a>
      </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
        <img
          src="https://png.pngtree.com/png-vector/20191025/ourmid/pngtree-spy-icon-simple-style-png-image_1858951.jpg"
          width="30"
        ></img>
        <span className="ml-3 text-xl xl:block lg:hidden">CV Ferkox</span>
      </a>
    </div>
  </header>
);

export default Header;
