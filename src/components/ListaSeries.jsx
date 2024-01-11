// ListaSeries.js
import React, { useEffect, useState } from "react";
import styles from './SeriesStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListaSeries = () => {
    const navigate = useNavigate();
    const [series, setSeries] = useState([]);
    const [hasMore, setHasMore] = useState(true);
      
    const fetchMoreData = () => {
        setTimeout(() => {
            fetch('https://peticiones.online/api/series')
                .then(response => response.json())
                .then(json => {
                    if(json.length > 0){
                        setSeries(prevSeries => prevSeries.concat(json));
                    } else {
                        setHasMore(false);
                    }
                })
                .catch(error => console.log(error));
        }, 500);
    };

    useEffect(() => {
        fetchMoreData();
    }, []);

    const handleImageClick = (_id) => {
        navigate(`/detail/${_id}`);
    };

    return (
        <InfiniteScroll
                dataLength={series.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Cargando...</h4>}
            >
        <div className="series">
                {series.map(serie => (
                    <div key={serie.id} className="serie">
                        <Link to={`/detail/${serie._id}`}>
                            <img
                                src={serie.image}
                                alt={serie.title}
                                onClick={() => handleImageClick(serie._id)}
                            />
                        </Link>
                        <h2>{serie.title}</h2>
                    </div>
                ))}
        </div>
            </InfiniteScroll>
    );
};

export default ListaSeries;
