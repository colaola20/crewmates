import { useParams } from "react-router-dom"
import { supabase } from '../client'
import { useState, useEffect } from 'react';

const CrewmateDetails = () => {
    const {name} = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            const {data} = await supabase
                .from('crewmate')
                .select()
                .eq('name', name)
                .single();
            
            setCrewmate(data);
        };
        fetchCrewmate();
    }, [name]);

    if (!crewmate) return <div>Loading...</div>;

        return (
        <div className="main-context">
            <h1>{crewmate.name}</h1>
            <div className="crewmate-detail">
                <img src="/path-to-image" alt={crewmate.name} />
                <div>
                    <h2>Speed: {crewmate.speed} mph</h2>
                    <h2>Color: {crewmate.color}</h2>
                    <p>Detailed information about {crewmate.name}...</p>
                </div>
            </div>
        </div>
    );
}

export default CrewmateDetails;