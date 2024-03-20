import React from 'react';
import './Entity.css';

function Entity(props) {
    return (
        <div className="entity-container">
            <img src="https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg" alt="movie-img" className='movie-img' />
            <h1>Rank: {props.Rank}</h1>
            <h2>Title: {props.Title}</h2>
            <h3>Box Office Collection: {props.BoxOfficeCollection_INRCrores}</h3>
            {/* <h4>Primary Languages: {props.PrimaryLanguages}</h4> */}
            {/* <h5>Release Year: {props.ReleaseYear}</h5> */}
            {/* <h6>Genre: {props.Genre}</h6> */}
            <h6>Directors: {props.Directors}</h6>
            <h6>Lead Actors: {props.LeadActors}</h6>
            {/* <strong>Production Companies:</strong> <p>{props.ProductionCompanies}</p> */}
            <strong>Description:</strong> <p>{props.Description}</p>
        </div>
    );
}

export default Entity;
