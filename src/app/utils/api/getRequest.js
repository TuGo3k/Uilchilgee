import axios from "axios";
import apiData from "../../../data/apidata";

export const getRequest = ({ setIsLoading, setValue, route }) => {
  axios
    .get(apiData + route)
    .then((e) => setValue(e.data.data))
    .catch((e) => console.log(e))
    .finally(() => setIsLoading(false));
};
