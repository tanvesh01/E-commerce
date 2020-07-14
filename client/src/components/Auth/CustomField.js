import React from 'react';
import {
    useField
} from "formik"
import { TextField } from "@material-ui/core"


const CustomField = ({ label, type, variant, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ?
        meta.error : "";
    return <TextField
        variant={variant}
        label={label}
        {...field}
        helperText={errorText}
        error={!!errorText}
        type={type}
    />
}

export default CustomField;