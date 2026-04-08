import {
    Container,
    LanguageContainer,
    LanguageIcon,
    LanguagesWrapper,
    NavLink,
    Wrapper,
} from "./styledNavbar";
import { languages, navLinks } from "../../core/arrays";
import { MobileMenu } from "./MobileMenu/mobileMenu";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lang: any) => {
        i18n.changeLanguage(lang);
    };

    const currentLanguage = i18n.language;

    return (
        <Wrapper>
  
            <LanguagesWrapper>
                {languages.map((language) => {
                    return (
                        <LanguageContainer
                            key={language.translation}
                            onClick={() => changeLanguage(language.translation)}
                            isActive={currentLanguage === language.translation}
                        >
                            <LanguageIcon src={language.icon} alt="Icon" />
                        </LanguageContainer>
                    );
                })}
            </LanguagesWrapper>
            <Container>
                {navLinks.map((link) => (
                    <NavLink
                        smooth={true}
                        key={link.text}
                        to={link.to}
                        spy={true}
                    >
                        {link.img}

                        {t(link.text)}
                    </NavLink>
                ))}
            </Container>
            <MobileMenu />
        </Wrapper>
    );
};
