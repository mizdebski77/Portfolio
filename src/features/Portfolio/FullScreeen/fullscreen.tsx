import React from "react";
import { CloseButton, Container, Wrapper } from "./sFullScreen";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion";
interface EditPageProps {
    setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Fullscreen: React.FC<EditPageProps> = ({ setFullScreen }) => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    return (
        <Wrapper
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <CloseButton onClick={() => setFullScreen(false)} />
            <Container>
                <ImageGallery items={images} />
            </Container>
        </Wrapper>
    );
};
