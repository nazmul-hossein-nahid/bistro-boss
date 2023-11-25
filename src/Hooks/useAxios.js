import axios from "axios";

const AxiosBaseURL = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxios = () => {
  return AxiosBaseURL;
};

export default useAxios;
