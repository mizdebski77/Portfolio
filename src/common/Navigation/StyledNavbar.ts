import { Link } from "react-scroll";
import { styled } from "styled-components";

const activeLink = "active";

export const NavLink = styled(Link)`
   font-size: 20px;
   transition: 0.4s;

   &:hover {
      color:white
   };

   &.${activeLink} {
      border-bottom: 1px solid #bcdb02;
   };

   @media (max-width:(750px)){
      font-size: 16px;
      padding: 12px;
      width: 70%;
      margin: 0 auto;
      border-radius: 0;
      color: white;
   };
`;