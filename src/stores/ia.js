import IAService from "@/services/IAService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIAStore = defineStore('ia', () => {

    const prompt = ref('')
    const respuesta = ref('')
    const cargando = ref(false)

    async function generarReceta() {
        respuesta.value = ''
        cargando.value = true
        const resultado = await IAService.generarReceta(prompt.value)
        
        for await(const texto of resultado){
            // console.log(texto);
            respuesta.value += texto
        }
        cargando.value = false
    }

    return {
        prompt,
        respuesta,
        generarReceta,
        cargando
    }

})