import React from "react";

const Faq = () => {
  return (
    <div className="text-basic-dark dark:text-white w-full flex flex-col items-center pt-11 pb-4 px-[60px] gap-[30px]">
      <p className="font-bold text-[50px]">Frequently Asked Questions</p>
      <div className="dark:bg-[#0D0D0D] bg-[#D1D1D1] rounded-[20px] py-4 px-10 gap-[30px] flex flex-col items-center">
        <p className="text-[26px] font-semibold text-center">
          Rules of KISMI.APP competition:
        </p>
        <p className="text-[26px] font-normal">
          <b>Account Creation:</b> To participate in the competition, a person
          must create an account by logging in through Instagram, Twitter,
          Facebook, or using their email.
        </p>
        <p className="text-[26px] font-normal">
          <b>Profile and Contest Participation:</b> After creating an account, a
          user can upload a picture to their profile and pick any uploaded
          picture to participate in available contests.
        </p>
        <p className="text-[26px] font-normal">
          <b>Voting:</b> Daily, a person will receive 10 free votes, called{" "}
          {"KISSes"}, which they can use to upvote any participant in the
          contest.
        </p>
        <p className="text-[26px] font-normal">
          <b>Tournament Cycles:</b> There are daily, weekly, and monthly
          tournaments where prizes are brought by sponsors and later on by the
          community treasury.
        </p>
        <p className="text-[26px] font-normal">
          <b>Eligibility:</b> There are no limits on eligible countries or
          regions.
        </p>
        <p className="text-[26px] font-normal">
          <b>Content Restrictions:</b> Nudity or pornography is not allowed.
        </p>
        <p className="text-[26px] font-normal">
          <b>Suspicious Activity:</b> Suspicious activity, such as using bots or
          committing fraud, will result in disqualification.
        </p>
        <p className="text-[26px] font-normal">
          <b>Judging Criteria:</b> The community is the judge and decides to
          whom to give the most votes according to their choice. Contestants are
          encouraged to be as original and creative as possible in their photos.
        </p>
        <p className="text-[26px] font-normal">
          <b>Winner Announcement:</b> The winner will be announced at the end of
          each tournament cycle and will receive a personal message if they make
          it to the top. All past winners and prizes they won can be viewed in
          the {"KISS BOX"} section.
        </p>
        <p className="text-[26px] font-normal">
          <b>Conditions of Entry:</b> By participating in the contest, a user
          agrees to these rules and allows the KISMI.APP administration to send
          promotional materials, use their profiles and photos as advertisements
          for KISMI.APP and its social network pages.
        </p>
      </div>
    </div>
  );
};

export default Faq;
