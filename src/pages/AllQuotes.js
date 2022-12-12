import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
    {id:"q1", text:"This is the first quote",author:"Ishan Veer"},
    {id:"q2", text:"This is the second quote",author:"Prashant Veer"}
    
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_DATA}/>
  );
};

export default AllQuotes;
