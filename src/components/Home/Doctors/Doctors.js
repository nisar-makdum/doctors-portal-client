import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://shielded-hamlet-89644.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 style={{color: '#1CC7C1'}} className="text-center  mb-5">OUR DOCTORS</h5>
                <div className="row">
                    {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;