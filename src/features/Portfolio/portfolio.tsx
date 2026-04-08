import { useState } from "react";
import {
    ImgText,
    ImgWrapper,
    ProjectArticle,
    ProjectCard,
    ProjectImage,
    ProjectLink,
    Section,
    Stack,
    StackWrapper,
    TextWrapper,
    TitleContainer,
    Wrapper,
} from "./sPortfolio";
import {
    LinksWrapper,
    SectionTitle,
    Title,
} from "../../common/components/components";
import { Link } from "lucide-react";
import { Fullscreen } from "./FullScreeen/fullscreen";
import { projects, projectsLinks } from "../../core/arrays";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Portfolio = () => {
    const [activeType, setActiveType] = useState("Web Applications");
    const [fullScreen, setFullScreen] = useState(false);

    const filteredProjects = projects.filter(
        (project) => project.type === activeType
    );

    const { t } = useTranslation();

    return (
        <Wrapper id="portfolio">
            <Title
                as={motion.h4}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                {t("projects.title")}
            </Title>
            <Section>
                <LinksWrapper
                    as={motion.div}
                    initial={{ x: "-80px", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    {projectsLinks.map((link) => (
                        <SectionTitle
                            key={link.type}
                            active={activeType === link.type}
                            onClick={() => setActiveType(link.type)}
                        >
                            {t(link.title)}
                        </SectionTitle>
                    ))}
                </LinksWrapper>
                {fullScreen && <Fullscreen setFullScreen={setFullScreen} />}

                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        as={motion.div}
                        initial={{
                            x: index % 2 === 0 ? "30%" : "-30%",
                            opacity: 0,
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        key={project.id}
                    >
                        <ImgWrapper as={motion.div}>
                            <ImgText target="_blank" href={project.liveUrl}>
                                <Link />
                                View project
                            </ImgText>
                            <ProjectImage
                                // onClick={() => setFullScreen(true)}
                                src={project.image}
                            />
                        </ImgWrapper>{" "}
                        <div>
                            <TextWrapper>
                                <TitleContainer>
                                    <ProjectLink
                                        href={project.liveUrl}
                                        target="_blank"
                                    >
                                        {project.name}
                                        <FaExternalLinkAlt />
                                    </ProjectLink>

                                    {project.codeUrl && (
                                        <ProjectLink
                                            href={project.codeUrl}
                                            target="_blank"
                                            style={{ fontWeight: "200" }}
                                        >
                                            <FaGithub />
                                            GitHub
                                        </ProjectLink>
                                    )}
                                </TitleContainer>

                                <ProjectArticle>
                                    {t(project.description)}
                                </ProjectArticle>
                            </TextWrapper>

                            <StackWrapper>
                                {project.tags.map((tech, index) => (
                                    <Stack key={index}>{tech}</Stack>
                                ))}
                            </StackWrapper>
                        </div>
                    </ProjectCard>
                ))}
            </Section>
        </Wrapper>
    );
};
