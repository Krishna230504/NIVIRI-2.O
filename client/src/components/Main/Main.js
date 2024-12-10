import React from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import AllServices from "../AllServices/AllServices";
import BookRequest from "../BookRequest/BookRequest";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import FeaturedVendors from "../FeaturedVendors/FeaturedVendors";

function Main()
{
    return <div>
        <Header/>
      <Search></Search>
      <AllServices></AllServices>
      <BookRequest></BookRequest>
      <FeaturedVendors></FeaturedVendors>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
}

export default Main;