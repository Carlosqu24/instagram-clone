import { useState, ChangeEventHandler } from "react";

//find handleInputChange type ts.





export function useForm<T>(initialState: T) {

    const [values, setValues] = useState<T>(initialState);

    const reset = () => setValues(initialState);

    const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();


    }

    return [values, handleInputChange, reset];
}