import {
    LangWrapper,
    Wrapper,
    Language,
    LangSpan,
    LangImg,
    LangTitle,
    Container,
    ImageWrapper,
    Article,
    ArticleTitle,
    ArticleText,
    Image,
} from "./sAbout";
import { Title } from "../../common/components/components";
import Slider from "react-infinite-logo-slider";
import { languages } from "../../core/arrays";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import profile from '../../common/Images/mountainsImg.jpg';

export const About = () => {
    const { t } = useTranslation();

    return (
        <Wrapper id="about">
            <Title
                as={motion.h4}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                {t("about.title")}
            </Title>
            <Container>
                <ImageWrapper
                    as={motion.div}
                    initial={{ x: "-80px", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <Image src={profile} alt="Me" />
                </ImageWrapper>

                <Article
                    as={motion.article}
                    initial={{ x: "80px", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <ArticleTitle> {t("about.title")}:</ArticleTitle>
                    <ArticleText>{t("about.description")}</ArticleText>

                    <ArticleTitle>{t("about.educationSubtitle")}</ArticleTitle>
                    <ArticleText>
                        <b style={{ fontWeight: "400" }}>
                            {t("about.educationUniversity")} /{" "}
                            <i>10.2019 - 02.2023</i>
                        </b>
                        <p></p>
                        <p>
                            <b style={{ fontWeight: "400" }}>
                                {t("about.education")}
                            </b>
                            / {t("about.educationTitle")}
                        </p>

                        {t("about.engineeringThesis")}
                    </ArticleText>

                    <ArticleTitle> {t("about.coursesSubtitle")}</ArticleTitle>
                    <ArticleText>
                        <b style={{ fontWeight: "400" }}>
                            {t("about.course1Title")} / <i>02.2022 - 05.2022</i>{" "}
                            / {t("about.course1Name")}
                        </b>
                        <p></p>
                        <p>
                            <b style={{ fontWeight: "400" }}></b>
                        </p>

                        <b style={{ fontWeight: "400" }}>
                            {t("about.course2Title")} / <i>09.2018 - 09.2019</i>{" "}
                            / {t("about.course2Name")}
                        </b>
                        <p></p>
                        <p>
                            <b style={{ fontWeight: "400" }}></b>
                        </p>
                    </ArticleText>
                </Article>
            </Container>
            <LangWrapper
                as={motion.div}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <LangTitle>{t("about.langTitle")}</LangTitle>
                <Slider
                    width="300px"
                    duration={15}
                    pauseOnHover={true}
                    blurBorders={false}
                >
                    {languages.map((language) => (
                        <Language key={language.id}>
                            <LangImg src={language.icon} alt="any" />
                            <LangSpan>{t(language.name)}</LangSpan>
                        </Language>
                    ))}
                </Slider>
            </LangWrapper>
        </Wrapper>
    );
};
