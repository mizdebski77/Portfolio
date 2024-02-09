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
}