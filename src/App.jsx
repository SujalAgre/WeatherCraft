import { useState } from "react";

import Output from './components/Output'
import SearchBox from './components/SearchBox'

function App() {
  const [data, setData] = useState("");

  return (
    <>
      <div className="main-container">
        <div className="search-box">
          <SearchBox setData={setData} className="search-box" />
        </div>
        <div className="output">
          <Output data={data} />
        </div>
      </div>
    </>
  )

}

export default App
