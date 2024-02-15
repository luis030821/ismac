import useQuestion from "@/backend/useQuestion";
import { Icons } from "cllk";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { addComment, coment } = useQuestion();
  const [text, setText] = useState();
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="flex justify-center items-center flex-col h-screen relative space-y-5">
        <h1 className="text-5xl">El autismo</h1>
        <div className="w-10/12 mx-auto max-w-[700px]">
          <img
            className="w-full"
            src="https://www.educaciontrespuntocero.com/wp-content/uploads/2021/04/autismo-978x652.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="container space-y-3 px-10">
        <h1 className="text-2xl text-center">
          Autismo: Información y Recursos
        </h1>
        <div className="section">
          <h2 className="text-xl">¿Qué es el autismo?</h2>
          <p>
            El autismo es un trastorno del desarrollo que afecta la
            comunicación, el comportamiento social y las habilidades de
            interacción. Se manifiesta de manera diferente en cada persona y
            puede variar desde casos leves hasta formas más severas.
          </p>
        </div>
        <div className="section">
          <h2 className="text-xl">Síntomas y Características</h2>
          <p>
            Los síntomas del autismo pueden incluir dificultades en la
            comunicación verbal y no verbal, patrones repetitivos de
            comportamiento, intereses restringidos y dificultades en la
            interacción social.
          </p>
        </div>
        <div className="section">
          <h2 className="text-xl">Diagnóstico y Tratamiento</h2>
          <p>
            El diagnóstico temprano y la intervención son clave para ayudar a
            las personas con autismo a alcanzar su máximo potencial. El
            tratamiento puede incluir terapia conductual, educación
            especializada y apoyo emocional.
          </p>
        </div>
        <div className="section">
          <h2 className="text-xl">Recursos y Apoyo</h2>
          <p>
            Existen numerosas organizaciones, grupos de apoyo y recursos en
            línea disponibles para personas con autismo y sus familias. Estos
            pueden proporcionar información, asistencia y comunidad.
          </p>
        </div>
        <div className="section">
          <h2 className="text-xl">Conclusión</h2>
          <p>
            El autismo es un trastorno complejo que afecta a millones de
            personas en todo el mundo. Con mayor conciencia, comprensión y
            apoyo, podemos ayudar a mejorar la calidad de vida de aquellos que
            viven con autismo y promover la inclusión en la sociedad.
          </p>
        </div>
        <div className="py-20">
          <h1 className="text-5xl text-center">Comentarios</h1>
          {coment?.map((x, index) => (
            <div
              className="bg-gray-800 rounded-xl p-5 flex space-x-3 items-center my-3"
              key={index}
            >
              <div className="border-r-2">
                <Icons size={40} icon="IconUser"></Icons>
              </div>
              <p>{x.coment}</p>
            </div>
          ))}
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Agrega tu comentario
            </label>
            <textarea
              onChange={(e) => {
                //@ts-ignore
                setText(e.target.value);
              }}
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {text != undefined && (
              <button
                className="bg-blue-500 rounded-xl px-8 py-1 mt-5"
                onClick={() => {
                  addComment(text);
                }}
              >
                Guardar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
