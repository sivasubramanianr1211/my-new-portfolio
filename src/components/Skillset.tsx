// Skillset.tsx

import React from "react";

const Skillset: React.FC = () => {
  const skillSetData: string[] = [
    "Core Java",
    "JSP",
    "Servlet",
    "JPA",
    "Java Beans",
    "Spring Boot",
    "React Js",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "Node Js",
    "MySQL",
    "MongoDB",
    "AWS amplify",
    "Github/lab",
  ];
  return (
    <section id="skillset" className="p-2">
      <h2 className="text-[26px]">Skillset</h2>
      <p className="text-[20px] mt-[2px] ">
        <div className="flex flex-wrap">
          {skillSetData.map((data) => (
            <div className="w-1/2">
              <p className="border-collapse border border-[#3bc9f3] p-1 text-center">
                {data}
              </p>
            </div>
          ))}
        </div>
      </p>
    </section>
  );
};

export default Skillset;
