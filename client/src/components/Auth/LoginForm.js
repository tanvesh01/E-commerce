import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";
import { Redirect, withRouter } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, useField } from "formik";
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "3rem",
    },
}));

const CustomField = ({ label, type, variant, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <TextField
            variant={variant}
            label={label}
            {...field}
            helperText={errorText}
            error={!!errorText}
            type={type}
        />
    );
};

const validationSchema = yup.object({
    email: yup.string().email("Enter a valid Email :)").required(),
    password: yup.string().min(3, "Too short :(").required(),
});

function LoginForm(props) {
    console.log(props);
    const handleSubmit = (email, password) => {
        console.log(props);
        const user = {
            email: email,
            password: password,
        };
        //props.history.push("/products");
        props.login(user, props.history);
    };
    const classes = useStyles();

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    //! make async call here!!!!
                    handleSubmit(data.email, data.password);
                    setSubmitting(false);
                }}
                validationSchema={validationSchema}
                //*validate={(values) => {
                //*    const errors = {};
                //*    if (values.email.indexOf("@") == -1 || values.email.indexOf(".") == -1) {
                //*        errors.email = "Enter a valid email :)"
                //*    }
                //*    return errors;
                //*}}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
                        <div className={classes.root}>
                            <CustomField label="Email" variant="outlined" name="email" />
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
                            <Button disabled={isSubmitting} type="submit">
                                Submit
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
        login: (user) => dispatch(actions.login(user)),
        logOut: () => dispatch(actions.logOut()),
    };
};

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
