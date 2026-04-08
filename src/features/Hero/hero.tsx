import {
    ButtonsWrapper,
    ContactIconsWrapper,
    Image,
    ImageWrapper,
    SocialLink,
    Role,
    Text,
    TextSection,
    Title,
    Wrapper,
} from "./sHero";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { heroButtons, socialLinks } from "../../core/arrays";
import { ButtonContent, Button } from "../../common/components/components";
import VantaEffect from "../../core/vanta";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import profile from '../../common/Images/mountainsImg.jpg';

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <div style={{ background: "#06061a" }}>
            <VantaEffect />
            <Wrapper id="home">
                <TextSection>
                    <Title>
                        <TypeAnimation
                            sequence={["Marcin Izdebski", 1000]}
                            speed={4}
                            cursor={false}
                            repeat={Infinity}
                        />
                    </Title>
                    <Role
                        as={motion.h2}
                        initial={{ x: "-30%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {t("hero.title")}
                    </Role>
                    <Text
                        as={motion.p}
                        initial={{ y: "30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {t("hero.subtitle")}
                    </Text>

                    <ContactIconsWrapper>
                        {socialLinks.map((link, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: "-100vh" }}
                                animate={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.2,
                                    type: "spring",
                                    bounce: 0.4,
                                }}
                                key={link.name}
                            >
                                <SocialLink
                                    style={{
                                        filter: `drop-shadow(0px 0px 8px ${link.bg})`,
                                    }}
                                    href={link.href}
                                    target="_blank"
                                    url={link.href}
                                    bgColor={link.bg}
                                />
                            </motion.div>
                        ))}
                    </ContactIconsWrapper>

                    <ButtonsWrapper>
                        {heroButtons.map((button, index) => (
                            <Link
                                key={button.name}
                                to={button.to}
                                smooth={true}
                            >
                                <Button
                                    as={motion.button}
                                    initial={{ y: "100vh" }}
                                    animate={{ y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.2,
                                    }}
                                >
                                    <ButtonContent>
                                        <button.icon />
                                        <span> {t(button.name)}</span>
                                    </ButtonContent>
                                </Button>
                            </Link>
                        ))}
                    </ButtonsWrapper>
                </TextSection>

                <ImageWrapper
                    as={motion.div}
                    initial={{ x: "30%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Image src={profile} alt="Profile" />
                </ImageWrapper>
            </Wrapper>
        </div>
    );
};
