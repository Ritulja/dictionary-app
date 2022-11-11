import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
  }
  function handleTheKeyWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleTheKeyWord} />
      </form>
    </div>
  );
}
