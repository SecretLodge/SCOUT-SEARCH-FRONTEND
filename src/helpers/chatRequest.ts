import axios from "axios";
import baseUrl from "./baseUrl";

export interface chatResponseModel { role: string, content: string }

export async function chatRequest(request: chatResponseModel[]){
    const { data } = await axios(`${baseUrl}/chat/message/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            messages: request,
        }
    })
    return { role: 'assistant', content: data.content }
}