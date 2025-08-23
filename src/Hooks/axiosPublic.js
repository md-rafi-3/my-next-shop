
import axios from "axios";

const useAxiosPublic = () => {
  const instance = axios.create({
    baseURL: "https://my-next-shop-express-server.vercel.app",
  });

  return instance;
};

export default useAxiosPublic;
