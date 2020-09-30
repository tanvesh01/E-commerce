import React from "react";
import { motion } from "framer-motion";
import classes from "./BackButton.module.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const Back = (props) => {
    console.log(props);
    const transition = {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
    };
    const backVariants = {
        exit:
            window.innerWidth <= 414
                ? { opacity: 0, transition }
                : { x: 100, opacity: 0, transition },
        enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
    };
    return (
        <motion.div
            variants={backVariants}
            initial="exit"
            animate="enter"
            exit="exit"
            className={classes.root}
            onClick={() => {
                props.history.goBack();
            }}
        >
            {/* // eslint-disable-next-line */}
            <a className={classes.back}>
                {" "}
                <div style={{ display: "flex" }}>
                    <KeyboardBackspaceIcon style={{ fontSize: "2rem" }} />
                </div>
                <div>Back</div>{" "}
            </a>
        </motion.div>
    );
};
export default Back;
