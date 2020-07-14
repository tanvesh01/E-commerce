import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button } from "@material-ui/core"
import { connect } from "react-redux"
import * as actions from "../../store/actions/authActions"
import * as yup from "yup";
import CustomField from "./CustomField";
import {
    Formik,
    Form,
    useField,
} from "formik";
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "3rem"
    }
}))

const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email("Enter a valid Email :)").required(),
    password: yup.string().min(3, "Too short :(").required()
})

function RegisterForm(props) {
    const handleSubmit = (name, email, password) => {
        const newUser = {
            name: name,
            password: password,
            email: email
        }
        props.register(newUser);
    }
    const classes = useStyles();
    return (
        <div  >
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    //! make async call here!!!!
                    handleSubmit(data.name, data.email, data.password)
                    setSubmitting(false)
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form >
                        <div className={classes.root} >
                            <CustomField
                                label="Name"
                                variant="outlined"
                                name="name"
                            />
                        </div>
                        <div className={classes.root}>
                            <CustomField
                                label="Email"
                                variant="outlined"
                                name="email"
                            />
                        </div>
                        <div className={classes.root}>
                            <CustomField
                                label="Password"
                                type="password"
                                variant="outlined"
                                name="password"
                            />
                        </div>
                        <div className={classes.root}>
                            <Button disabled={isSubmitting} type="submit" >Submit</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(actions.register(newUser)),
        logOut: () => dispatch(actions.logOut())
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm);