import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useTravel } from "../context/TravelContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const TravelFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { travel, createTravel, getTravelById, updateTravel } = useTravel();
  // console.log(travel);
  // console.log(createTravel);

  //carga la aplicación lea ese parametro de la url
  const params = useParams();
  useEffect(() => {
    // console.log(params);
    async function loadTravel() {
      if (params.id) {
        const travel = await getTravelById(params.id);
        //el setValue del useForm
        setValue("title", travel.title);
        setValue("description", travel.description);
      }
    }
    loadTravel();
  }, []);

  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    //A) esto es para probar para crear viaje
    // createTravel(data);
    // navigate("/travel");

    //B) en caso de que actualicemos tenemos que hacer la condicional
    if (params.id) {
      updateTravel(params.id, data);
    } else {
      createTravel(data);
    }
    navigate("/travel");
  });
  return (
    <div>
      <Navbar />
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="text"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
          />
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3"
            placeholder="Descripción"
            {...register("description")}
          ></textarea>

          <label>Completado</label>
          <input type="checkbox" {...register("completed")} />
          <button
            className="flex h-10 px-6 font-semibold rounded-md bg-green-900 text-white my-5"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};
