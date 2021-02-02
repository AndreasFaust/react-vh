import React from "react";
import { NextPage } from "next";
import useVH from "../src";

interface Props {}

const Startpage: NextPage<Props> = (props) => {
  useVH();
  return (
    <div>
      <h1>This is 100vh</h1>
      <h2 style={{ background: "blue" }}>This is 50vh</h2>
      <h2 style={{ background: "red" }}>This is 50vh</h2>
    </div>
  );
};

export default Startpage;
