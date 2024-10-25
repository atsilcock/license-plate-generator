import React, { useEffect, useState } from 'react';

const UpdateDriver = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('/cars') // Replace with your actual backend endpoint
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <div>
            <h1>Update Driver</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>{car.make} {car.model}</li>
                ))}
            </ul>
        </div>
    );
};

export default UpdateDriver;