import { handleHttpErrors, makeOptions } from "./FacadeUtils";

const URI = "https://adamlass.com/LarsRoyalityBrand/api/cars"
class Facade{
    getCar = async (id) => {
        const URL = `${URI}/${id}`
        try {
            const res = await fetch(URL)
            console.log(res)
            const json = await handleHttpErrors(res)
            return json
        } catch (error) {
            return error
        }
    }
}

export default new Facade()