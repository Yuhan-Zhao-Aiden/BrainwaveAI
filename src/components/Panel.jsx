import React from "react";
import { gradient } from "../assets";
import Button from "./Button.jsx";

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
      <img src={gradient} alt="" className="w-[500px]" />
    </section>
  );
};

export default Panel;
