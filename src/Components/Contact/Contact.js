import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-8 p-5">
      <h1 className="font-bold text-blue-700 text-4xl mb-10">
        About Our Company
      </h1>
      <div className="flex flex-col items-center mb-10 bg-indigo-100 rounded-lg p-10 ">
        <p className="text-2xl mb-3 text-indigo-700">
          PackTech Park Way Cupertino
        </p>
        <p className="text-2xl mb-3 text-indigo-700">California, U.S.</p>
        <p className="text-2xl mb-3 text-indigo-700">Phone: 010000000</p>
      </div>
    </div>
  );
};

export default Contact;
