import { openrouter } from "@/lib/ia";
import { streamText } from "ai";

export default{
    async generarReceta(prompt) {
        const resultado = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            // system: 'eres un chef reconocido a nivel internacional',
            // system: 'Eres un excelente matemático y un analista experto, y tienes mucha experiencia en pronósticos y eres un experto de juegos de azar',
            // temperature: 0 // valor de 0 a 1, 1 es muy estricto
        })
        // console.log(resultado);
        return resultado.textStream
    } 
}