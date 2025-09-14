import { useQuery } from "@tanstack/react-query"
import type { AxiosRequestConfig } from "axios"
import axiosInstance from "../config/axios.config";

interface IPropsQuery {
    queryKey: string[],
    url: string,
    config?: AxiosRequestConfig
}
const useCustomQuery = ({url,config,queryKey}:IPropsQuery) => {
    return useQuery({
        queryKey,
        queryFn: async () => {
            const {data} = await axiosInstance.get(url,config)
            return data
        },
    });
};

export default useCustomQuery;

