import React from "react";
import Intro from "../components/Intro"
import NewProducts from "../components/NewProducts";
import BestSeller from "../components/BestSeller";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div>
        <Intro />
        <NewProducts/>
        <BestSeller/>
        <NewsletterBox/>
    </div>
  )
}

export default Home