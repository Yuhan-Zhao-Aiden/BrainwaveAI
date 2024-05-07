import React from "react";
import { gradient } from "../assets";
import Button from "./Button.jsx";
import { aircraft, eiffel_tower } from "../assets";

const Panel = () => {
  return (
    <section className="px-8 mt-8 pt-8 flex items-center justify-around max-lg:flex-col-reverse">
      <div className="max-w-[500px] flex flex-col items-start gap-10">
        <p>
          absolute top aspect-square border border-n-2 rounded-full
          translate aspect square left-2
        </p>
        <div className="flex gap-5">
          <Button className="w-auto" white>
            Learn more
          </Button>
          <Button className=" w-auto">Shop now</Button>
        </div>
      </div>
      <div className="relative">
        <img src={gradient} alt="" className="w-[500px]" />
        <img
          src={aircraft}
          alt=""
          className="w-[500px] absolute top-10"
        />
        <img
          src={eiffel_tower}
          alt=""
          className="w-[300px] absolute bottom-4"
        />
      </div>
    </section>
  );
};

export default Panel;
