import React from "react";
import "../../App.css";
import "./About.css";

export default function About() {
  return (
    <div className="aboutAll">
      <p className="aboutTitle">Hello World!</p>
      <p3 class="center">
        My name is Nam Truong and I am a freshman from the University of Texas
        at Dallas studying computer science. I created this site to not only
        highlight my work and accomplishments but to exhibit my growth and
        development within computer science. Through my academic work, projects,
        and self interests, I have learned java, c++, ruby, and javascript as
        well as using git for version control.
        <br />
        <br />
        Currently, I am involved in the{" "}
        <a href="https://www.acmutd.co/index.html" target="-blank">
          Association for Computing Machinery
        </a>
        , having participated in its{" "}
        <a href="https://www.acmutd.co/projects" target="-blank">
          projects
        </a>{" "}
        division, and now part of the{" "}
        <a href="https://www.hackutd.co/" target="-blank">
          HackUTD
        </a>{" "}
        division. After participating in my first hackathon, I became a
        technical officer for HackUTD to help organize and enrich the experience
        of the many new students who decide to partake in HackUTD in the future.
        Additionally, I am involved in the UTD powerlifting team.
        <br />
        <br />
        When I'm not coding or learning, I enjoy weight training, playing games,
        testing my typing speed on{" "}
        <a href="https://typings.gg/" target="-blank">
          typings.gg
        </a>
        , and eating mint chocolate chip ice cream :)
      </p3>
    </div>
  );
}
