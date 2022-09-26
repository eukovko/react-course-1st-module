import { ChangeEvent, useState } from "react";

export default function Main() {
  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  function update(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    console.log(query);
    localStorage.setItem("query", query);
    setQuery(query);
  }

  return (
    <div>
      <h1>Main page</h1>
      <input type="text" value={query} onChange={(event) => update(event)} />
    </div>
  );
}
