import { useEffect } from "react";
import { useTravel } from "../context/TravelContext";
import { TravelCard } from "../components/TravelCard";

export const HomePage = () => {
  const { getAllTravel, travel } = useTravel();

  //useEffect para traer los viajes cuando se ejecuta esta pagina
  useEffect(() => {
    getAllTravel();
  }, []);

  if (travel.length === 0)
    return (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center my-8">No hay viajes publicados todavía...</h2>
        </div>
      </>
    );

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center my-8">Viajes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {travel.map((travel, i) => (
            <TravelCard travel={travel} key={i} />
            ))}
        </div>
      </div>
    </>
  );
};
