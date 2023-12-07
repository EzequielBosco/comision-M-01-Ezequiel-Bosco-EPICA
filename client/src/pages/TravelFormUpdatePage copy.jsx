import { useForm } from "react-hook-form";
import { useTravel } from "../context/TravelContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const TravelFormUpdatePage = () => {
  const { register, handleSubmit, setValue } = useForm()

  const { createTravel, getTravelById, updateTravel } = useTravel()

  //carga la aplicación lea ese parametro de la url
  const params = useParams()
  useEffect(() => {
    async function loadTravel() {
      if (params.id) {
        const travel = await getTravelById(params.id)
        //el setValue del useForm
        setValue("title", travel.title)
        setValue("description", travel.description)
      }
    }
    loadTravel();
  }, [params.id, setValue])

  const onSubmit = handleSubmit((data) => {
    //B) en caso de que actualicemos tenemos que hacer la condicional
    if (params.id) {
      updateTravel(params.id, data);
    } else {
      createTravel(data);
    }
    setTimeout(() => {
      // Redirige al usuario al inicio
      window.location.href = "/"
    }, 1000)
  })

  return (
    <>     
      <div className="bg-white h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-10 rounded-md bg-gray-100">
          <form onSubmit={onSubmit}>
            <label htmlFor="title">Título</label>
            <input
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="Titulo"
              {...register("title")}
              autoFocus
            />
            
            <label htmlFor="title">Descripción</label>
            <textarea
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              rows="3"
              placeholder="Descripción"
              {...register("description")}
            ></textarea>

            <label>Ubicación</label>
            <input
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="Ubicación"
              {...register("location")}
              autoFocus
            />

            <label htmlFor="startDate">Fecha de Inicio</label>
            <input
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="date"
              {...register("startDate")}
            />

            <label htmlFor="endDate">Fecha de Fin</label>
            <input
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="date"
              {...register("endDate")}
            />

            <label htmlFor="price">Precio</label>
            <input
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="number"
              placeholder="Precio"
              {...register("price")}
            />

            <label htmlFor="imageUrl">URL de la Imagen</label>
            <input
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="URL de la Imagen"
              {...register("imageUrl")}
            />

            <button
              className="flex items-center h-8 px-7 font-semibold rounded-md back-color text-white my-5"
              type="submit"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
