import {
    Form,
    FormTitle,
    Input,
    InputWrapper,
    Label,
    Legend,
    TextArea,
    Wrapper,
} from "./sContact";
import {
    Button,
    ButtonContent,
    Title,
} from "../../common/components/components";
import { MdEmail, MdOutlineMessage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    const handleSuccess = () => {
        toast.success("Message sent!");
    };

    const handleError = () => {
        toast.error("Something went wrong");
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;

        emailjs
            .sendForm(
                "service_6rgn80y",
                "template_5buzkff",
                formElement,
                "umY-NBviFIQJGm59n"
            )
            .then((result) => {
                if (result.text === "OK") {
                    formElement.reset();
                    handleSuccess();
                }
            })
            .catch(() => {
                handleError();
            });
    };

    return (
        <Wrapper id="contact">
            <Title
                as={motion.h4}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                {t("contact.title")}
            </Title>

            <Form
                onSubmit={sendEmail}
                ref={form}
                as={motion.form}
                initial={{ x: "80px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <FormTitle>{t("contact.description")}</FormTitle>
                <InputWrapper>
                    <Label>
                        <Legend>
                            <FaRegUser />
                            {t("contact.name")}
                        </Legend>
                        <Input
                            required
                            type="text"
                            name="name"
                            placeholder="Marcin"
                        />
                    </Label>
                    <Label>
                        <Legend>
                            <FaUser /> {t("contact.last")}
                        </Legend>
                        <Input
                            type="text"
                            name="surname"
                            placeholder="Izdebski"
                        />
                    </Label>
                </InputWrapper>
                <Label>
                    <Legend>
                        <FaPhone /> {t("contact.number")}
                    </Legend>
                    <Input type="text" name="phone" placeholder="123-456-789" />
                </Label>
                <Label>
                    <Legend>
                        <MdOutlineEmail />
                        E-Mail
                    </Legend>
                    <Input
                        required
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                    />
                </Label>
                <Label>
                    <Legend>
                        <MdOutlineMessage />
                        {t("contact.message")}
                    </Legend>
                    <TextArea
                        required
                        name="message"
                        placeholder="Your message here:"
                    />
                </Label>
                <Button style={{ margin: "auto" }}>
                    <ButtonContent>
                        <MdEmail />
                        <span>{t("contact.button")}</span>
                    </ButtonContent>
                </Button>
            </Form>
        </Wrapper>
    );
};
