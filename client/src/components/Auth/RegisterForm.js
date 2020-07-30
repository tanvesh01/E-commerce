import React from "react";
import { useStyles } from "../Auth/FormStyles";
import { TextField, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";
import * as yup from "yup";
import { Formik, Form, useField } from "formik";
const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email("Enter a valid Email :)").required(),
    password: yup.string().min(3, "Too short :(").required(),
});

const CustomField = ({ label, type, variant, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const classes = useStyles();
    return (
        <TextField
            className={classes.root}
            variant={variant}
            label={label}
            {...field}
            helperText={errorText}
            error={!!errorText}
            type={type}
        />
    );
};

function RegisterForm(props) {
    const handleSubmit = (name, email, password) => {
        const newUser = {
            name: name,
            password: password,
            email: email,
        };
        props.register(newUser);
    };
    return (
        <div>
            <Typography variant="h3" style={{ textAlign: "center", fontSize: "4rem" }}>
                Welcome
            </Typography>
            <div style={{ textAlign: "center", marginBottom: "1.3rem" }}>
                <Typography variant="p">Sign un now to shop anything you want</Typography>
            </div>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    //! make async call here!!!!
                    handleSubmit(data.name, data.email, data.password);
                    setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
                        <div>
                            <CustomField label="Name" variant="outlined" name="name" />
                        </div>
                        <div>
                            <CustomField label="Email" variant="outlined" name="email" />
                        </div>
                        <div>
                            <CustomField
                                label="Password"
                                type="password"
                                variant="outlined"
                                name="password"
                            />
                        </div>
                        <div style={{ textAlign: "center", width: "100%", marginBottom: "1rem" }}>
                            <Button
                                disabled={isSubmitting}
                                style={{ color: "white", backgroundColor: "black", width: "100%" }}
                                type="submit"
                            >
                                Sign up
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(actions.register(newUser)),
        logOut: () => dispatch(actions.logOut()),
    };
};

export default connect(null, mapDispatchToProps)(RegisterForm);
