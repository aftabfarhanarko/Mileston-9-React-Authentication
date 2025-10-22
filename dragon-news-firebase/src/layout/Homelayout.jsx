import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LetasNews from "../Components/LetasNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import Loding from "../Components/Loding";

const Homelayout = () => {
  const {state} = useNavigation();
  return (
    <div>
      <header className="my-4 ">
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LetasNews></LetasNews>
        </section>
        <nav className="w-11/12 mx-auto ">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto my-4 gap-10">
      <aside className="col-span-2 sticky top-0 h-fit">
        <LeftAside></LeftAside>
      </aside>
        <section className="col-span-8 ">
          {state == "loading" ? <Loding></Loding> :   <Outlet></Outlet> }
        
        </section>
       <aside className="col-span-2  sticky top-0 h-fit hidden md:block">
        <RightAside></RightAside>
       </aside>
      </main>
    </div>
  );
};

export default Homelayout;
