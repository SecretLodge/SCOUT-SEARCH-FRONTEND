import axios from "axios";
import baseUrl from "./baseUrl";

export default async function chatResponse(request: string){
    const { data } = await axios(`${baseUrl}/chat/message/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            messages: [{ role: "user", content: request }],
        }
    })
    return data
}