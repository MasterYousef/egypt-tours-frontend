import { useState } from "react";
import { toast } from "react-toastify";
interface pepole  {
  minGroup: HTMLFormElement;
  maxGroup: HTMLFormElement;
};
interface price  {
  minPrice: HTMLFormElement;
  maxPrice: HTMLFormElement;
};
interface duration  {
  minDuration: HTMLFormElement;
  maxDuration: HTMLFormElement;
};
function optionsLogic(
  search: string[],
  setSearch: React.Dispatch<React.SetStateAction<string[]>>
) {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [rate, setRate] = useState(0);
  const setFromDate = (date: Date) => {
    setFrom(date);
    const index = search.findIndex((value) => value.startsWith("start[gte]="));
    if (index !== -1) {
      const data = search.map((value, ind) => {
        index === ind ? (value = `start[gte]=${date}`) : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search, `start[gte]=${date}`]);
    }
  };
  const setToDate = (date: Date) => {
    setTo(date);
    const index = search.findIndex((value) => value.startsWith("start[lte]="));
    if (index !== -1) {
      const data = search.map((value, ind) => {
        index === ind ? (value = `start[lte]=${date}`) : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search, `start[lte]=${date}`]);
    }
  };
  const clearFromDate = () => {
    setFrom(new Date());
    const index = search.findIndex((value) => value.startsWith("start[gte]="));
    if (index !== -1) {
      const data = search.map((value, ind) => {
        index === ind ? (value = `start[gte]=0`) : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search]);
    }
  };
  const clearToDate = () => {
    setTo(new Date());
    const index = search.findIndex((value) => value.startsWith("start[lte]="));
    if (index !== -1) {
      const data = search.map((value, ind) => {
        index === ind ? (value = `start[lte]=0`) : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search]);
    }
  };
  const setRating = (avg: number) => {
    setRate(avg);
    const index = search.findIndex((value) =>
      value.startsWith("ratingsAverage[gte]=")
    );
    if (index !== -1) {
      const data = search.map((value, ind) => {
        index === ind ? (value = `ratingsAverage[gte]=${avg}`) : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search, `ratingsAverage[gte]=${avg}`]);
    }
  };
  const setPepole = (
    e: React.ChangeEvent<pepole> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const event = e as React.ChangeEvent<pepole>;
    const max = event.target.maxGroup.value || 0;
    const min = event.target.minGroup.value || 0;
    const index1 = search.findIndex((value) =>
      value.startsWith("maxPeople[lte]=")
    );
    const index2 = search.findIndex((value) =>
      value.startsWith("maxPeople[gte]=")
    );
    if (index1 !== -1 || index2 !== -1) {
      const data = search.map((value, ind) => {
        index1 === ind
          ? (value = `maxPeople[lte]=${max}`)
          : index2 === ind
          ? (value = `maxPeople[gte]=${min}`)
          : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search, `maxPeople[lte]=${max}`,`maxPeople[gte]=${min}`]);
    }
  };
  const setPrice = (
    e: React.ChangeEvent<price> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const event = e as React.ChangeEvent<price>;
    const max = event.target.maxPrice.value || 0;
    const min = event.target.minPrice.value || 0;
    const index1 = search.findIndex((value) =>
      value.startsWith("price[lte]=")
    );
    const index2 = search.findIndex((value) =>
      value.startsWith("price[gte]=")
    );
    if (index1 !== -1 || index2 !== -1) {
      const data = search.map((value, ind) => {
        index1 === ind
          ? (value = `price[lte]=${max}`)
          : index2 === ind
          ? (value = `price[gte]=${min}`)
          : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search, `price[lte]=${max}`,`price[gte]=${min}`]);
    }
  };
  const setDuration = (
    e: React.ChangeEvent<duration> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const event = e as React.ChangeEvent<duration>;
    const max = event.target.maxDuration.value || 0;
    const min = event.target.minDuration.value || 0;
    const index1 = search.findIndex((value) =>
      value.startsWith("duration[lte]=")
    );
    const index2 = search.findIndex((value) =>
      value.startsWith("duration[gte]=")
    );
    if (index1 !== -1 || index2 !== -1) {
      const data = search.map((value, ind) => {
        index1 === ind
          ? (value = `duration[lte]=${max}`)
          : index2 === ind
          ? (value = `duration[gte]=${min}`)
          : null;
        return value;
      });
      setSearch(data);
    } else {
      setSearch([...search, `duration[lte]=${max}`,`duration[gte]=${min}`]);
    }
  };
  function RepeatIcon(times1: number, times2: number) {
    let icons1 = [];
    let icons2 = [];
    for (let i = 0; i < times1; i++) {
      icons1.push(<i className="fa-solid fa-star text-yellow-500" key={i}></i>);
    }
    for (let i = 0; i < times2; i++) {
      icons2.push(
        <i className="fa-regular fa-star text-yellow-500" key={i}></i>
      );
    }
    const active = rate === times1;
    return (
      <div
        className="my-1 rate cursor-pointer"
        onClick={() => setRating(times1)}
      >
        {icons1}
        {icons2} <span className={active ? "text-amber-300" : "hs"}>& up</span>
      </div>
    );
  }
  return {
    from,
    setFromDate,
    to,
    setToDate,
    RepeatIcon,
    setPepole,
    clearFromDate,
    clearToDate,
    setPrice,
    setDuration
  };
}

export default optionsLogic;
