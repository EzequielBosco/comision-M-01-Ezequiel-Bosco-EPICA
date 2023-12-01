import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTravel } from "../context/TravelContext";
import { TravelCard } from "../components/TravelCard";

export const TravelPage = () => {
  // const { user } = useAuth();
  const { getAllTravel, travel } = useTravel();

  //useEffect para traer los viajes cuando se ejecuta esta pagina
  useEffect(() => {
    getAllTravel();
  }, []);

  if (travel.length === 0)
    return (
      <>
        <Navbar />
        <h1>No Tiene Viajes</h1>
      </>
    );

  return (
    <>
      <Navbar />
      <h1>Viajes</h1>
      {/* PRUEBA 1 */}
      {/* {JSON.stringify(user, null, 3)} */}

      {/* PRUEBA 2 */}
      {/* 
      {travel.map((tas, i) => (
        <div key={i}>
          <h1>{tas.title}</h1>
          <p>{tas.description}</p>
        </div>
      ))} */}

      {/* PRUEBA 3 CON TravelCARD */}

      <div className="grid grid-cols-3 gap-2">
        {travel.map((travel, i) => (
          <TravelCard travel={travel} key={i} />
        ))}
      </div>
    </>
  );
};
