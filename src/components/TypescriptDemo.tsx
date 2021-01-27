import React from "react";
interface Description {
  title: string,
  description: string
}
const TypescriptDemo = ({title="this is the title", description="this is the description text"}: Description) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TypescriptDemo;
