import React, { use } from "react";
import { Link, NavLink } from "react-router";
const caterogyPromise = fetch("/categories.json").then((res) => res.json());

const Caterogy = () => {
  const cateroise = use(caterogyPromise);

  return (
    <div >
      <h2 className="text-lg font-semibold">All Caterogy</h2>
     <div className="grid grid-cols-1 gap-4 mt-5">
         {cateroise.map((element) => <NavLink to={`/caterogy/${element.id}`} className="btn bg-base-100 border-0 hover:bg-base-200 font-medium text-accent">{element.name}</NavLink>)}
     </div>
    </div>
  );
};

export default Caterogy;
