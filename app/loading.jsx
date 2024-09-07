"use client";
import React from "react";
import DotLoader from "react-spinners/DotLoader";

const override = {
  display: "block",
  margin: "350px auto",
};

const Loading = ({ loading }) => {
  return (
    <DotLoader
      color="#3b82f6"
      size={150}
      loading={loading}
      cssOverride={override}
      aria-label="Loading..."
    />
  );
};

export default Loading;
