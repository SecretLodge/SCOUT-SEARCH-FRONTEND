import axios from "axios";
import baseUrl from "./baseUrl";

export default async function searchResponse(request: string){
    const { data } = await axios(`${baseUrl}/search/query/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            query: request,
        }
    })
    return data
}