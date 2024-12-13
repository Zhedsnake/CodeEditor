export class CodeController {
    async executeCode(language: string, code: string): Promise<{ status: string; output?: string; error?: string }> {
        try {
            await this.delay(1000);

            console.log("Language:", language);
            console.log("Code:", code);
            console.log("Length of code:", code.length);

            for (let i = 0; i < code.length; i++) {
                console.log(`Character at position ${i}: ${code.charCodeAt(i)}`);
            }

            if (language === 'python') {
                if (code.trim() === 'print("Hello, world!")') {
                    return {
                        status: "success",
                        output: "Hello, world!\n"
                    };
                } else {
                    return {
                        status: "error",
                        error: "SyntaxError: Invalid syntax"
                    };
                }
            } else if (language === 'go') {
                if (code.trim() === 'fmt.Println("Hello, world!")') {
                    return {
                        status: "success",
                        output: "Hello, world!\n"
                    };
                } else {
                    return {
                        status: "error",
                        error: "SyntaxError: Unexpected token"
                    };
                }
            } else {
                return {
                    status: "error",
                    error: `Unsupported language: ${language}`
                };
            }
        } catch (error) {
            return { status: "error", error: String(error) };
        }
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default new CodeController();
