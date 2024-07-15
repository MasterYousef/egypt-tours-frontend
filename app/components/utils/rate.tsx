import { ReactNode } from "react";

const rate = (avg: number): ReactNode => {
    const rate = [];
    const unRate = [];
    for (let i = 0; i < avg; i++) {
      rate.push(<i className="fa-solid fa-star text-yellow-500" key={i}></i>);
    }
    for (let i = 0; i < 5 - avg; i++) {
      unRate.push(
        <i className="fa-regular fa-star text-yellow-500" key={i}></i>
      );
    }
    return (
      <span>
        {rate}
        {unRate}
      </span>
    );
  };
export default rate