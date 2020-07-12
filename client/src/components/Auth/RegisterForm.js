import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button } from "@material-ui/core"
import { connect } from "react-redux"
import * as actions from "../../store/actions/authActions"
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
        margin: "3rem"
    }
}))

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
            >
                {({ values, isSubmitting }) => (
                    <Form >
                        <div>
                            <Field
                                label="Name"
                                variant="outlined"
                                name="name"
                                as={TextField}
                                type="input" />
                        </div>
                        <div className={classes.root}>
                            <Field
                                label="Email"
                                variant="outlined"
                                name="email"
                                as={TextField}
                                type="input"
                            />
                        </div>
                        <div className={classes.root}>
                            <Field
                                label="Password"
                                type="password"
                                variant="outlined"
                                name="password"
                                as={TextField}
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