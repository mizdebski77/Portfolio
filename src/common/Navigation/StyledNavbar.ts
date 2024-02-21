import { Link } from "react-scroll";
import { styled } from "styled-components";

const activeLink = "active";

export const NavLink = styled(Link)`
   font-size: 20px;
   transition: 0.4s;

   &:hover {
      color:white
   }

   &.${activeLink} {
      border-bottom: 1px solid #bcdb02;
   }
`;