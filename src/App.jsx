import React from "react";
import Cardnew from './components/Cardnew'

const App = () => {

console.log("2:58");

  const jobs = [
  {
    companyLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mountain View, CA"
  },
  {
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Seattle, WA"
  },
  {
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "New York, NY"
  },
  {
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Menlo Park, CA"
  },
  {
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Los Angeles, CA"
  },
  {
    companyLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "New York, NY"
  },
  {
    companyLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "San Jose, CA"
  },
  {
    companyLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "8 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Austin, TX"
  },
  {
    companyLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 weeks ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "San Francisco, CA"
  },
  {
    companyLogo: "https://logo.clearbit.com/shopify.com",
    companyName: "Shopify",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Remote"
  }
];





  return (
    <div className="parent">
      {jobs.map(function(elem){
          return <Cardnew logo={elem.companyLogo} name = {elem.companyName} datePosted={elem.datePosted} post = {elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}   />
      })}
    </div>
  );
};

export default App;
