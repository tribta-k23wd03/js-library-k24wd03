import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes")
      .then((res) => res.json())
      .then((data) => {
        const list = data.messages.personalized;
        const rand = Math.floor(Math.random() * list.length);
        setQuote(list[rand]);
      });
  }, []);
  return (
    <div>
      <h2>Random Quotes</h2>
      <p>{quote ? `"${quote}"` : "Loading..."}</p>
    </div>
  );
}

export default Quote;
