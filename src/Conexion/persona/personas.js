import axios from "axios";

const baseURL = "persona";
const REACT_APP_MAIN_SERVER =process.env.REACT_APP_MAIN_SERVER;
/**
 *
 * @returns a list of people
 */
export const listarPersonas = async () => {
  const defaultResponse = [
    { id: 100000, nombre: "trujillo", rol: "profe" },
    { id: 20000, nombre: "gaaaaa", rol: "JP" },
    { id: 3000000, nombre: "chupetin", rol: "vas a caer" },
  ];

  /*   axios
    .get(
      REACT_APP_MAIN_SERVER + 
      `/${baseURL}`)
    .then((res) => {
      console.log("listaar:", res);
    })
    .catch((error) => {
      console.log(`Error al listar personas:`, error);
    });
   */
  try {
    //AQUI SE HACE LA LLAMADA

    const res = await axios.get(REACT_APP_MAIN_SERVER + `/${baseURL}`);
    console.log("listar:", res);
    return res.data;

    //return defaultResponse;
  } catch (error) {
    console.log(`Error al listar personas:`, error);
