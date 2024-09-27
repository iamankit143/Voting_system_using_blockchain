import React from "react";
import Banner from "../assest/homebanner.webp";
import Farmer1 from "../assest/Farmer1.jpg";
import Student from "../assest/Student.jpg";

const FirstPhase = () => {
  return (
    <div className="first-phase">
      <img src={Farmer1} className="farmer-1" />
      <p className="content">
        Voting is a fundamental pillar of democracy, giving individuals the
        power to influence the direction of their government and society. It is
        not just a right, but a civic duty that ensures every voice can be heard
        on important issues such as healthcare, education, and social justice.
        By casting a vote, you contribute to the collective decision-making
        process that affects your community, country, and future generations.
        Every vote counts, and even small numbers can sway outcomes in close
        elections. In a world where many people are still fighting for the right
        to vote, participating in elections is a powerful way to protect and
        strengthen democratic values.
      </p>
    </div>
  );
};

const SecondPhase = () => {
  return (
    <div className="first-phase">
      <p className="content">
        Casting a vote for the first time is a profound experience for any
        student. It symbolizes not just the right to participate in democracy,
        but also a personal step into adulthood. The excitement and nervousness
        blend as they approach the polling station, reflecting on the importance
        of their voice in shaping the future. This moment is often filled with a
        sense of empowerment, as they realize that their opinions matter and can
        influence decisions that affect their community and country. Many
        students are motivated by issues they care about—education, climate
        change, or social justice—making their vote feel even more significant.
        The experience also fosters a sense of responsibility; it encourages
        them to stay informed and engaged. Ultimately, voting for the first time
        can ignite a lifelong commitment to civic participation, reinforcing the
        idea that every vote counts in the tapestry of democracy.
      </p>
      <img src={Student} className="farmer-1" />
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-body">
      <div className="upper">
        <FirstPhase />
        <SecondPhase />
      </div>
      <img src={Banner} alt="Home Banner" className="img-banner" />
    </div>
  );
};

export default Body;
