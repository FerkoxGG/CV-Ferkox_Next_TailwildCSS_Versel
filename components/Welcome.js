import Link from "next/link";
const Welcome = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://www.muycomputer.com/wp-content/uploads/2021/05/Aplicaciones_de_hacking.jpg"
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                Fernando Antonio González Gaete
              </h2>
              <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
              <p className="text-base">Ferkox Developer</p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">
              Titulado en “Técnico de Nivel Superior en Automatización y Control
              Industrial”, con conocimientos de desarrollo web Full-Stack. Con
              experiencia previa en impresión 3D. Persona responsable, con
              habilidades comunicacionales, proactivo, capacidad de liderazgo,
              con entusiasmo de aprender cosas nuevas, entre otras.
            </p>
            <Link href="/experiencia_laboral">
              <button className="text-white-500 inline-flex items-center lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Leer Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Welcome;
