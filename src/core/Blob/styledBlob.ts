import styled from "@emotion/styled";

export const Div = styled.div`
    width: 580px;
    position: absolute;

    @media(max-width:1400px) {
        width: 520px;
    }
    @media(max-width:1200px) {
        width: 420px;
    }

    @media(max-width:1000px) {
        width: 340px;
    }
   
    @media(max-width:500px) {
        width: 300px;
    }
`;