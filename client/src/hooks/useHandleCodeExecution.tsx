import { useEffect, useState } from "react";
import { useActions } from "./useActions";
import { useAppSelector } from "./reduxHooks-toolkit/useRedux.ts";

export default function useHandleCodeExecution() {
    const [error, setError] = useState<string>("");
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { executionResult, executionError, isExecuting } = useAppSelector((state) => state.codeExecution);
    const { executeCode } = useActions();

    const handleExecuteCode = async (language: string, code: string) => {
        setError("");
        setResult(null);

        await executeCode({ language, code });
    };

    useEffect(() => {
        if (executionError) {
            setError(executionError);
        }
    }, [executionError]);

    useEffect(() => {
        if (executionResult) {
            setResult(executionResult);
        }
    }, [executionResult]);

    useEffect(() => {
        console.log("isExecuting:", isExecuting);
        if (isExecuting) {
            console.log("isExecuting:", isExecuting);
            setLoading(isExecuting);
        } else {
            setLoading(false)
        }
    }, [isExecuting]);

    return {
        loading,
        error,
        handleExecuteCode,
        result,
    };
}
