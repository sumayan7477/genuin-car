import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

export const axioseSequre = axios.create({
  // baseURL: "https://cardoctor-new.vercel.app",
  baseURL: "http://localhost:5000",

  withCredentials: true,
});
const useAxios = () => {
  const { signout } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axioseSequre.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.error("errortractd in the inter sector", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("log out the user");
          signout()
            .then(() => {
                navigate('/login');
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axioseSequre;
};

export default useAxios;
