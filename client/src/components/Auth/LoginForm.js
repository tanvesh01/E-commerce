import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, useField } from "formik";
const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "1rem",
        width: "100%",
        "& label.Mui-focused": {
            color: "grey",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "red",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black",
                borderWidth: "3px",
            },
            "&:hover fieldset": {
                borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
                borderColor: "black",
            },
        },
    },
}));

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

    return (
        <div>
            <Typography variant="h3" style={{ textAlign: "center", fontSize: "4rem" }}>
                Welcome back
            </Typography>
            <div style={{ textAlign: "center", marginBottom: "1.3rem" }}>
                <Typography variant="p">Log in now to shop anything you want</Typography>
            </div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    //! make async call here!!!!
                    handleSubmit(data.email, data.password);
                    setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
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
