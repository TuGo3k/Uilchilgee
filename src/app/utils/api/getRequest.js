import apidata from "@/data/apidata";
import axios from "axios";

const getRequest = async ({ route, setValue, setIsLoading, errorFunction }) => {
    return axios.get(apidata.url + route)
        .then((e) => setValue(e.data.data))
        .catch((e) => errorFunction ? errorFunction() : console.log('error', e))
        .finally(() => setIsLoading && setIsLoading(false))
};

export default getRequest;