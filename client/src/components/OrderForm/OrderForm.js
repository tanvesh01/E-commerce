import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { submitOrder } from "../../store/actions/orderActions";
import * as yup from "yup";
import { Formik, Form, useField } from "formik";
import { makeStyles } from "@material-ui/core/styles";

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
    submitModel: {
        backgroundColor: "white",
        width: "100%",
        padding: "2rem",
        height: "81%",
    },
}));
const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email("Enter a valid Email :)").required(),
    address: yup.string().required("A valid address is required"),
    phone: yup.string().min(7, "should atlest be 7 digits").required(),
    pin: yup.string().min(7, "should atlest be 7 digits").required(),
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

function OrderForm(props) {
    const submit = (name, email, phone, address, pin) => {
        let ids = [];
        for (let i = 0; i < props.cart.length; i++) {
            ids.push(props.cart[i]._id);
        }
        const order = {
            products: ids,
            name: name,
            sizes: props.sizes,
            phone: phone,
            address: address,
            pin: pin,
            email: email,
        };
        console.log(order);
        props.submitOrder(order);
    };
    const classes = useStyles();
    return (
        <div className={classes.submitModel}>
            <Typography variant="h3" style={{ textAlign: "center", fontSize: "4rem" }}>
                Just some details
            </Typography>
            <div style={{ textAlign: "center", marginBottom: "1.3rem" }}>
                <Typography variant="p">Sign un now to shop anything you want</Typography>
            </div>
            <Formik
                initialValues={{ name: "", email: "", phone: "", address: "", pin: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    //! make async call here!!!!
                    submit(data.name, data.email, data.phone, data.address, data.pin);
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
                            <CustomField label="Phone" variant="outlined" name="phone" />
                        </div>
                        <div>
                            <CustomField label="Address" variant="outlined" name="address" />
                        </div>
                        <div>
                            <CustomField label="Pin" variant="outlined" name="pin" />
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

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart,
        sizes: state.orders.sizes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitOrder: (order) => dispatch(submitOrder(order)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
