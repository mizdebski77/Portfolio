export const containerVariants = {
    hidden: {
        opacity: 0,
        x: '-40vh'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
        }
    }
};

export const variantText = {
    hidden: {
        opacity: 0,
        y: '10vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            delay: 0.2
        }
    }
};

export const variantTitle = {
    hidden: {
        opacity: 0,
        y: '-10vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        }
    }
};

export const variantButton = {
    hidden: {
        opacity: 0,
        x: '-100vh'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            type: "spring",
        }
    }
};

export const variantOpacity = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

export const mobileNavAnimation = {
    hidden: {
        y: "-100%",
        opacity: 0,
        transition: {
            type: "tween",
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
        },
    },
};
