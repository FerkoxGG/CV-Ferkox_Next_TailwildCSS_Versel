import Link from "next/link";

const Timeline = () => (
  <section>
    <br />
    <ul>
      <li>
        <div className="card-product">
          <p>2020 - 2021</p>
          <div className="card-product-info">
            <h2>
              Asistente de producción y mantenedor de calidad en empresa
              Auxiliar Conservera S.A.
            </h2>
            <p>
              Realizando tareas de paletizador en la rama de control de calidad,
              verificando la integridad del producto y dar aviso en el proceso
              de encontrar fallos para pronta solución del problema.
            </p>
          </div>
        </div>
      </li>
      <br />
      <li>
        <div className="card-product">
          <p>2020</p>
          <div className="card-product-info">
            <h2>Operador Sistema A.S en empresa Novaxiona EST Ltda.</h2>
            <p>
              Realizando tareas como operador en las dependencias de ESSBIO
              ubicadas en Planta de Aguas Servidas, San Vicente, comuna de
              Talcahuano.
            </p>
          </div>
        </div>
      </li>
      <br />
      <li>
        <div className="card-product">
          <p>2019 - 2020</p>
          <div className="card-product-info">
            <h2>Maestro eléctrico en empresa WellCorp SpA.</h2>
            <p>
              Realizando tareas de programación de HMI, informes, gestión de
              compras de instrumentación automatizada y ayudante de trabajos en
              terreno de los barcos de tipo wellboat.
            </p>
          </div>
        </div>
      </li>
      <br />
      <li>
        <div className="card-product">
          <p>2018 - 2019</p>
          <div className="card-product-info">
            <h2>
              Vendedor integral en empresa Sociedad de ventas al por menor y
              franquicias SpA.
            </h2>
            <p>
              Realizando tareas de vendedor, asesoría, re- ponedor, cajero,
              entre otras.
            </p>
          </div>
        </div>
      </li>
      <br />
      <li>
        <div className="card-product">
          <p>2018</p>
          <div className="card-product-info">
            <h2>
              Práctica profesional de técnico en automatización en Gladiator
              Control
            </h2>
            <p>
              Realizando tareas de instalación, supervisión, reparación y
              servicio técnico en procesos de estacionamiento automático.
            </p>
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

export default Timeline;
