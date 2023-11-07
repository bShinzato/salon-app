import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="text-6xl font-cursive rounded-3xl text-brownDark lg:grid lg:grid-cols-2 lg:text-center lg:items-center text-center items-center pt-10 animate-appearance-in">
        <p>
          Thanks for checking out my page! I'm currently going to school for
          Cosmetology in Palms Springs. I specialize in hair styling and
          highlights. Check out below for a brief gallery of my work!
        </p>
        <div className="flex items-center justify-center">
          <img
            alt="Selfie"
            src="/images/Subject.png"
            className="w-2/3 h-3/3 rounded-3xl"
          />
        </div>
      </div>
      <div className="text-6xl font-cursive rounded-3xl text-brownDark lg:text-center">
        Gallery
      </div>
    </>
  );
};

export default AboutMe;
