// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AddEntity.css';

function AddEntityForm() {
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4006/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add entity');
            }

            const data = await response.json();
            console.log('Entity added successfully:', data);

            // Reset the form after successful submission
            setFormData({
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

            // Redirect or update the UI as needed
        } catch (error) {
            console.error('Error adding entity:', error.message);
        }
    };

    return (
        <div className="container">
            <h2 className='text-center'>Add Entity</h2>
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
                    <label className="form-label">Created By:</label>
                    <input type="text" className="form-control" name="created_by" value={formData.created_by} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
}

export default AddEntityForm;
