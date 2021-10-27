import react from "react";

export default function ChildComponent({ data, setClick, goInner }) {
  return (
    <div
      className="childComponent"
      onClick={() => {
        setClick(data);
        goInner(true);
      }}
    >
      {data}
    </div>
  );
}
