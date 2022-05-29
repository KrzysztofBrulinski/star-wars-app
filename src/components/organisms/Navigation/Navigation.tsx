import Link from "next/link";
import { Header, Nav, StyledLink } from "./Navigation.style";

const NavLinks = [
  { name: "Characters list", href: "/characters/page/1" },
  { name: "Favorite list", href: "/wishlist" },
  { name: "Contact us", href: "/form" },
];

const Navigation = () => (
  <Header>
    <Nav>
      {NavLinks.map(({ name, href }) => (
        <Link key={href} href={href}>
          <StyledLink>{name}</StyledLink>
        </Link>
      ))}
    </Nav>
  </Header>
);

export default Navigation;
