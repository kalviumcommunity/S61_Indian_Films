import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './MovieDB.css';


function MovieDB() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4006/api/read')
            .then(response => {
                console.log(response.data.data);
                setMovies(response.data.data);
            })
            .catch(error => {
                console.log('Error fetching movies:', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4006/api/delete/${id}`)
            .then(response => {
                setMovies(movies.filter(entity => entity._id !== id));
                console.log('Entity deleted successfully:', response.data);
            })
            .catch(error => {
                console.log('Error deleting entity:', error);
            });
    };

    const handleUpdate = (item) => {
        // console.log(item);
        navigate("/update/:id", { state: item });
    };

    return (
        <div className="movie-list-container">
            <h1 className='movie-list-title'>All Entities</h1>

            {movies.length === 0 ? (
                <p>No entities to display</p>
            ) : (
                <ul className="movie-list">
                    {movies.map(entity => (
                        <div className='movie-item' key={entity._id}>
                            <div className="movie-details">
                                
                                    <p className="movie-detail">Rank: {entity.Rank}</p>
                                    <p className="movie-detail">Title: {entity.Title}</p>
                                    <p className="movie-detail">Box Office Collection (INR Crores): {entity.BoxOfficeCollection_INRCrores}</p>
                                    <p className="movie-detail">Primary Languages: {entity.PrimaryLanguages}</p>
                                    <p className="movie-detail">Release Year: {entity.ReleaseYear}</p>
                                    <p className="movie-detail">Genre: {entity.Genre}</p>
                                    <p className="movie-detail">Directors: {entity.Directors}</p>
                                    <p className="movie-detail">Lead Actors: {entity.LeadActors}</p>
                                    <p className="movie-detail">Production Companies: {entity.ProductionCompanies}</p>
                                    <p className="movie-detail">Description: {entity.Description}</p>
                                
                                <div className="movie-actions">
                                    {/* <Link to={`/update/${entity._id}`} className='update-link'>Update</Link> */}
                                    <button className="update-link" onClick={() => handleUpdate(entity)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(entity._id)}>Delete</button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MovieDB;
