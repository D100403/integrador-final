import React, { useState } from "react";
import styles from './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaSeries from "./components/ListaSeries";
import Buscador from "./components/Buscador";
import DetalleSerie from "./components/DetalleSerie";

const App = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 10 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDataSource(prevData => prevData.concat(Array.from({ length: 10 })));
    }, 1000);
  };

  return (
      <Router>
        <div className="grid">
          <Routes>
            <Route
              path="/detail/:_id"
              element={<DetalleSerie />}
            />
            <Route
              path="/"
              element={
                <>
                  <Buscador />
                  <ListaSeries
                    dataSource={dataSource}
                    setDataSource={setDataSource}
                    hasMore={hasMore}
                    fetchMoreData={fetchMoreData}
                  />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
