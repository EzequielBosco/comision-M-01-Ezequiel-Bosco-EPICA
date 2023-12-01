import Travel from "../models/travel.model.js";

//TODO: GET TODAS LOS VIAJES
export const getAllTravels = async (req, res) => {
  try {
    //primero mostramos el find sin atributos y despues con atributos
    const allTravels = await Travel.find({
      //para cuando agregamos la logica para cada usuario
      user: req.user.id,
      //para ver toda la información el populate
    }).populate("user"); //con esto mostramos toda la info

    res.status(200).json(allTravels);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al buscar todos los viajes", error });
  }
};

//TODO: GET VIAJE BY ID
export const getTravelById = async (req, res) => {
  const { id } = req.params;
  try {
    const travelFound = await Travel.findById(id);

    if (!travelFound)
      return res.status(404).json({ message: "No se encontró la viaje" });
    res.status(200).json(travelFound);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al buscar la viaje por Id", error });
  }
};

//TODO: POST CREAR VIAJE
export const createTravel = async (req, res) => {
  const { title, description, location, startDate, endDate, price, imageUrl } = req.body;
  try {
    const newTravel = new Travel({
      title,
      description,
      location,
      startDate,
      endDate,
      price,
      imageUrl,
      //para cuando agregamos la logica para cada usuario
      user: req.user.id,
    });

    const savedTravel = await newTravel.save();
    res.status(200).json(savedTravel);
  } catch (error) {
    return res.status(400).json({ message: "Error al crear la viaje", error });
  }
}

//TODO: PUT ACTUALIZAR VIAJE
export const updateTravel = async (req, res) => {
  try {
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("user");

    if (!updateTravel)
      return res.status(404).json({ message: "viaje no encontrada" });

    res.status(200).json(updatedTravel);
  } catch (error) {}
};

//TODO: DELETE ELIMINAR VIAJE
export const deleteTravel = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTravel = await Travel.findByIdAndDelete(id);

    if (!deletedTravel)
      return res
        .status(404)
        .json({ message: "No se encontró la viaje para eliminar" });
    res.status(200).json({ message: "viaje eliminada" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al intentar eliminar la viaje", error });
  }
};
