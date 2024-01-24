import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  withCredentials: true, //  force le cookie à recevoir et à être lu! revoie le cookie en back Aller parametrer les cors sinon ERREUR! //
});

export default instance;
