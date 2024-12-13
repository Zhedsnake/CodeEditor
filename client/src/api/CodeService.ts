// import axios, {AxiosError} from 'axios';
import codeController from "../backend-plug/codeController.ts";

export default class CodeService {
    // static async logInRequest(name: string, password: string) {
    //     try {
    //         const response = await axios.post(`example/login`, {name, password});
    //         return response;
    //     } catch (e) {
    //         const error = e as AxiosError<{ error: string }>;
    //         throw new Error(error.response?.data?.error || "Неизвестная ошибка");
    //     }
    // }

    static async executeCode(payloadRequest: {language: string, code: string}): Promise<string> {
        console.log("executeCode request:", payloadRequest);

        try {
            const response = await codeController.executeCode(payloadRequest.language, payloadRequest.code);
            console.log("executeCode response:", response);

            if (response && "status" in response && "output" in response && response.status === 'success') {
                console.log("success")
                return response.output;
            } else if (response && "status" in response && "error" in response && response.status === 'error') {
                console.error("executeCode error:", response.error);
                throw new Error(response.error);
            }
        } catch (error) {
            console.error("executeCode error:", error);
            throw new Error(error);
        }
    }
}
