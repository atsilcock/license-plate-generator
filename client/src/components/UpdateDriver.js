import React, { useState } from 'react'

const UpdateDriver = () => {
    const [search, setSearch] = useState('')
    const [carToUpdate, setCarToUpdate] = useState(null)
    const [updatedCar, setUpdatedCar] = useState({})

    const fetchCarByVin = () => {
        fetch(`/cars/vin/${search}`)
            .then((response) => response.json())
            .then((data) => {
                setCarToUpdate(data)
                setUpdatedCar(data)
            })
            .catch(() => {
                setCarToUpdate(null)
            })
    }

    const handleSearch = () => {
        if (search.trim() !== '') {
            fetchCarByVin()
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUpdatedCar((prevCar) => ({
            ...prevCar,
            [name]: value,
        }))
    }

    const handleUpdate = () => {
        fetch(`/cars/vin/${carToUpdate.vin}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCar),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Car updated successfully:', data)
            })
            .catch((error) => {
                console.error('Error updating car:', error)
            })
    }

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <div>
                <label>
                    <strong>Please Enter Car VIN: </strong>
                </label>
                <input
                    className="border-solid border-2 border-black"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="ml-4 bg-blue-500 text-white p-2" onClick={handleSearch}>
                    Search Car
                </button>
            </div>

            {carToUpdate ? (
                <div className="mt-6">
                    <h3 className="text-xl font-bold">Update Car Details</h3>
                    <div className="mt-4">
                        <label><strong>Color:</strong></label>
                        <input
                            className="border-solid border-2 border-black ml-2"
                            type="text"
                            name="color"
                            value={updatedCar.color}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <label><strong>Make:</strong></label>
                        <input
                            className="border-solid border-2 border-black ml-2"
                            type="text"
                            name="make"
                            value={updatedCar.make}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <label><strong>Model:</strong></label>
                        <input
                            className="border-solid border-2 border-black ml-2"
                            type="text"
                            name="model"
                            value={updatedCar.model}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <label><strong>Year:</strong></label>
                        <input
                            className="border-solid border-2 border-black ml-2"
                            type="number"
                            name="year"
                            value={updatedCar.year}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="mt-4 bg-green-500 text-white p-2" onClick={handleUpdate}>
                        Update Car
                    </button>
                </div>
            ) : (
                <p className="mt-4">No car found with the given VIN.</p>
            )}
        </div>
    )
}

export default UpdateDriver
