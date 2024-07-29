import { getUrlPath } from "../config";
import { useFetch } from "../hooks/useFetch";

export const GetCompanyProfile = ({ symbol }) => {
    const appUrl = getUrlPath(`stock/profile2?symbol=${symbol}`);
    const { data, error, loading } = useFetch(appUrl);
    const company = data
    return { company, error, loading };
}