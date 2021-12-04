import { useField } from '@euk-labs/formix';
import { InputHTMLAttributes } from 'react';



function TextField(
    props: InputHTMLAttributes<HTMLInputElement> & { name: string }
) {
    const { name, ...rest } = props;
    const { field } = useField(name);

    return <input {...rest} {...field} />;
}