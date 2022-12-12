import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", text: "This is the first quote", author: "Ishan Veer" },
  { id: "q2", text: "This is the second quote", author: "Prashant Veer" },
];

const QuoteDetail = () => {
  
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteID);

  if(!quote){
    return(
      <p>quote does not exist</p>
    )
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Comments />
    </Fragment>
  );
};

export default QuoteDetail;
