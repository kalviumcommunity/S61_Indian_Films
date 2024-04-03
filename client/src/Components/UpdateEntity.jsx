import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './AddEntity.css';

const UpdateEntity = () => {
    const location = useLocation();
    const initialData = location.state;
    console.log(initialData);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData || {
        Rank: '',
        Title: '',
        BoxOfficeCollection_INRCrores: '',
        PrimaryLanguages: '',
        ReleaseYear: '',
        Genre: '',
        Directors: '',
        LeadActors: '',
        ProductionCompanies: '',
        Description: '',
        created_by: ''
    });


    // useEffect(() => {
    //     // Fetch existing entity data
    //     axios.get(`http://localhost:4006/api//${id}`)
    //         .then(response => {
    //             // Set the form data state with the existing entity data
    //             setFormData(response.data);

    //         })
    //         .catch(error => {
    //             console.log('Error fetching entity:', error);
    //         });
    // }, [id]);

    const handleChange = e => {
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:4006/api/update/${initialData._id}`, formData)
            .then(response => {
                console.log('Entity updated successfully:', response.data);
                // navigate('/entities');
                navigate('/movies');

                // Redirect or perform any other action after successful update
            })
            .catch(error => {
                console.log('Error updating entity:', error);
            });
    };

    return (
        <div className="container">
            <h2 className='text-center'>UPDATE ENTITY</h2>
            <form onSubmit={handleSubmit}>
                <div className="Film">
                    <label className="form-label">Rank:</label>
                    <input type="number" className="form-control" name="Rank" value={formData.Rank} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" name="Title" value={formData.Title} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Box Office Collection (INR Crores):</label>
                    <input type="text" className="form-control" name="BoxOfficeCollection_INRCrores" value={formData.BoxOfficeCollection_INRCrores} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Primary Languages:</label>
                    <input type="text" className="form-control" name="PrimaryLanguages" value={formData.PrimaryLanguages} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Release Year:</label>
                    <input type="number" className="form-control" name="ReleaseYear" value={formData.ReleaseYear} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Genre:</label>
                    <input type="text" className="form-control" name="Genre" value={formData.Genre} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Directors:</label>
                    <input type="text" className="form-control" name="Directors" value={formData.Directors} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Lead Actors:</label>
                    <input type="text" className="form-control" name="LeadActors" value={formData.LeadActors} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Production Companies:</label>
                    <input type="text" className="form-control" name="ProductionCompanies" value={formData.ProductionCompanies} onChange={handleChange} required />
                </div>
                <div className="Film">
                    <label className="form-label">Description:</label>
                    <textarea className="form-control" name="Description" value={formData.Description} onChange={handleChange} required></textarea>
                </div>
                <div className="Film">
                    <label className="form-label">Created by:</label>
                    <input type="text" className="form-control" name="created_by" value={formData.created_by} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateEntity;
