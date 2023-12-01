import { useTravel } from "../context/TravelContext";
import { Link } from "react-router-dom";

export const TravelCard = ({ travel }) => {
  const { deleteTravel } = useTravel();
  //   console.log(travel);
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold text-white">{travel.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              //   console.log(travel._id);
              deleteTravel(travel._id);
            }}
          >
            eliminar
          </button>
          <Link to={`/travel/${travel._id}`}>editar</Link>
        </div>
      </header>
      <p className="">{travel.description}</p>
      <p className="text-2xl font-bold">
        {new Date(travel.date).toLocaleDateString()}
      </p>
    </div>
  );
};
