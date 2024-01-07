import React from "react";
import notice from "../assets/image/notice.jpg";
import hero from "../assets/image/img7.jpg";
import group from "../assets/image/img6.jpg";
import book from "../assets/image/img5.jpg";
import share from "../assets/image/simple.jpg";
import update from "../assets/image/update.jpg";
import check from "../assets/image/check.jpg";
import customize from "../assets/image/customize.jpg";
import calculate from "../assets/image/calculate.jpg";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className=" md:pt-16 pt-20 text-slate-800">
        {/* Hero section */}
        <Hero
          img={hero}
          heading={"BTEB Results at Your Fingertips"}
          text1={"Does it feel difficult to find BTEB results?"}
          text2={"Well... Not anymore!"}
          text3={
            "Finding BTEB results made easy! Discover the simplest way to access your diploma or polytechnic results."
          }
          btnText={"Check Result"}
          hight={470}
          btnWidth={150}
        />
        {/* Stay Update */}

        <div className="bg-secondary text-white">
          <Hero
            img={update}
            heading={"Stay Updated with the Latest Results from BTEB"}
            text1={
              "Explore the publication history and statistical data of BTEB results on our Latest Results page"
            }
            btnText={"Check Latesh Result"}
            btnWidth={180}
            type={"ok"}
          />
        </div>
        {/* View Results */}
        <Hero
          img={notice}
          heading={"View Results of All Students in Any Institute"}
          text1={
            "Check the latest results of any institute. View the list of results for all students in any semester of any institute on any date."
          }
          btnText={"Check Institute Result"}
          btnWidth={"180"}
        />
        {/* Group Results */}
        <div className="bg-secondary text-white">
          <Hero
            img={group}
            heading={"View Your Group Results Together in a List"}
            text1={
              "See any group or list of results by the list of roll numbers. Add them to your favorites, assign group names, and share group links with anyone."
            }
            btnText={"Check Group Result"}
            btnWidth={"180"}
            type={"ok"}
          />
        </div>
        {/*Easily Share   */}
        <Hero
          img={share}
          heading={"Easily Share Results with Others"}
          text1={"Share individual and group result links with others for easy access to the results."}
          btnText={"Check & share Result"}
          btnWidth={"180"}
        />
        {/* Check Results */}
        <div className="bg-secondary text-white">
          <Hero
            img={check}
            heading={"Check Results with One Click from the Favorites List"}
            text1={"Save individuals and groups in your favorites list for quick access to their results."}
            btnText={"Go to Favorites"}
            btnWidth={"150"}
            type={"ok"}
          />
        </div>
        {/* Customize and Save */}
        <Hero
          img={customize}
          heading={"Customize and Save Your Friend and Group Names"}
          text1={"Edit the names of your favorite people, friends, and groups for easy identification."}
          btnText={"Edit Favorite"}
          btnWidth={"150"}
        />
        {/* CGPA Calculator */}
        <div className="bg-secondary text-white">
          <Hero
            img={calculate}
            heading={"Calculate Your Destinations with the CGPA Calculator"}
            text1={"Determine the required GPA for your upcoming semesters to achieve your target CGPA."}
            btnText={"Open Calculator"}
            btnWidth={"150"}
            type={"ok"}
          />
        </div>
        {/* Explore Polytechnic Booklists */}
        <Hero
          img={book}
          heading={"Explore Polytechnic Booklists"}
          text1={
            "Find comprehensive booklists for various departments of Diploma in Engineering, Textile and other curriculumns."
          }
          btnText={"View BookLists"}
          btnWidth={"150"}
        />
      </div>
    </>
  );
};

export default Home;
