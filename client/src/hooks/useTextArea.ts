import {ChangeEvent, useState} from "react";

export default function useTextArea<T>(initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value as unknown as T);
    };

    return {
        value,
        onChange,
        setValue,
        clear: () => setValue(initialValue)
    };
}