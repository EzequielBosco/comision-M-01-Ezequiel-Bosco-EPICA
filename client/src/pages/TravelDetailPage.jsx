import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTravelByIdReq } from "../api/travel";

export const TravelDetailPage = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState(null);

  useEffect(() => {
    const fetchTravelDetails = async () => {
      try {
        const response = await getTravelByIdReq(id);
        setTravel(response.data);
      } catch (error) {
        console.error("Error fetching travel details:", error);
      }
    };

    fetchTravelDetails();
  }, [id]);

  if (!travel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{travel.title}</h1>
      <p>{travel.description}</p>
      <p>Ubicación: {travel.location}</p>
      {/* Otros detalles del viaje */}
    </div>
  );
};