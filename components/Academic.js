import Link from "next/link";

const Academic = () => (
  <section>
    <br />
    <ul>
      <li>
        <div className="card-product">
          <p>2021</p>
          <div className="card-product-info">
            <h2>
              Full-Stack WebDeveloper, estudios en Le Wagon Santiago (Batch
              #644). Bootcamp para desarrolladores web.
            </h2>
            <p>Situación: Completado.</p>
          </div>
        </div>
      </li>
      <br />
      <li>
        <div className="card-product">
          <p>2014 - 2019</p>
          <div className="card-product-info">
            <h2>
              Técnico de Nivel superior en Automatización y Control Industrial,
              INACAP / Sede Concepción -Talcahuano.
            </h2>
            <p>Situación: Titulado.</p>
          </div>
        </div>
      </li>
      <br />
      <li>
        <div className="card-product">
          <p>2014 - 2019</p>
          <div className="card-product-info">
            <h2>
              Ingeniería en Automatización y Control Industrial, INACAP / Sede
              Concepción - Talcahuano.
            </h2>
            <p>Situación: Incompleto.</p>
          </div>
        </div>
      </li>
      <br />
    </ul>
    <Link href="/">
      <button className="text-white-500 inline-flex items-center lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
        Volver
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
  </section>
);

export default Academic;
