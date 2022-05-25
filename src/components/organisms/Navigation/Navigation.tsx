import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Header, Nav, StyledLink } from "./Navigation.style";

const NavLinks: { name: string; href: string }[] = [
  { name: "Characters list", href: "/characters/page/1" },
  { name: "Favorite list", href: "/favorite" },
  { name: "Contact form", href: "/form" },
];

const Navigation: FunctionComponent = () => (
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
