// import React from 'react';
// import './Entity.css';

// function Entity(props) {
//     return (
//         <div className="entity-container">
//             <img src="https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg" alt="movie-img" className='movie-img' />
//             <h1>Rank: {props.Rank}</h1>
//             <h2>Title: {props.Title}</h2>
//             <h3>Box Office Collection: {props.BoxOfficeCollection_INRCrores}</h3>
{/* <h4>Primary Languages: {props.PrimaryLanguages}</h4> */ }
{/* <h5>Release Year: {props.ReleaseYear}</h5> */ }
{/* <h6>Genre: {props.Genre}</h6> */ }
// <h6>Directors: {props.Directors}</h6>
// <h6>Lead Actors: {props.LeadActors}</h6>
{/* <strong>Production Companies:</strong> <p>{props.ProductionCompanies}</p> */ }
//             <strong>Description:</strong> <p>{props.Description}</p>
//         </div>
//     );
// }

// export default Entity;


import React from 'react';
import './Entity.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Entity() {
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        // Fetch entities from the server
        axios.get(`http://localhost:4006/api/read`)
            .then(response => {
                console.log(response.data)
                setEntities(response.data.data); // Set the entities in the state
            })
            .catch(error => {
                console.log('Error fetching entities:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once after component mount
    return (
        <div>
            <h1>All Entities</h1>
            <ul>
                {entities.map(entity => (
                    <li key={entity._id} className="entity-item">
                        <h1>Rank: {entity.Rank}</h1>
                        <h2>Title: {entity.Title}</h2>
                        <h3>Box Office Collection INRCrores: {entity.BoxOfficeCollection_INRCrores}</h3>
                        <h4>Primary Languages: {entity.PrimaryLanguages}</h4>
                        <h5>Release Year: {entity.ReleaseYear}</h5>
                        <h6>Genre: {entity.Genre}</h6>
                        <h6>Directors: {entity.Directors}</h6>
                        <h6>LeadActors: {entity.LeadActors}</h6>
                        <h6>Production Companies: {entity.ProductionCompanies}</h6>
                        <h6>Description: {entity.Description}</h6> 
                    </li>
                ))}
        </ul>
        </div >
    );
}

export default Entity;