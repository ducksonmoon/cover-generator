import React from "react";
import "./Navbar.css";
import { NavigationModel } from "./Navbar.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navabar() {
  const GithubIcon: () => JSX.Element = () => (
    <FontAwesomeIcon icon={faGithub} size="xl" />
  );

  const EnvelopeIcon: () => JSX.Element = () => (
    <FontAwesomeIcon icon={faEnvelope} size="xl" />
  );

  const navigation: Array<NavigationModel> = [
    {
      name: GithubIcon(),
      href: "https://github.com/ducksonmoon/cover-generator",
      current: false,
    },
    {
      name: EnvelopeIcon(),
      href: "mailto:MehrshadBaqerzadegan@gmail.com",
      current: false,
    },
  ].reverse();

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="/">🦴 Cover Generator</a>
        </div>
        <nav>
          <ul className="nav-list">
            {navigation.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
