import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button } from "@material-ui/core"
import {
    Formik,
    Field,
    Form,
    useField,
    FieldAttributes,
    FieldArray
} from "formik";
const useStyles = makeStyles((theme) => ({
    root: {

    }

}))

function RegisterForm() {
    return (
        <div  >
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    //! make async call here!!!!
                    console.log(data)
                    setSubmitting(false)
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form >
                        <Field
                            variant="outlined"
                            name="name"
                            as={TextField}
                            type="input" />
                        <div>
                            <Field
                                variant="outlined"
                                name="email"
                                as={TextField}
                                type="input"
                            />
                        </div>
                        <div>
                            <Field
                                label="Password"
                                type="password"
                                variant="outlined"
                                name="password"
                                as={TextField}
                            />
                        </div>
                        <div>
                            <Button disabled={isSubmitting} type="submit" >Submit</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm;