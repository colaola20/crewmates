import { useParams, Link } from "react-router-dom"
import { supabase } from '../client'
import { useState, useEffect } from 'react';
import crewmateCard from '../assets/crewmateCard.png'
import './CrewmateDetails.css'

const CrewmateDetails = () => {
    const {name} = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            try {
                const {data, error} = await supabase
                    .from('crewmate')
                    .select()
                    .eq('name', decodeURIComponent(name))
                    .single();
                
                if (error) throw error;
                setCrewmate(data);
            } catch (error) {
                console.error('Error fetching crewmate:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCrewmate();
    }, [name]);

    if (loading) return <div className="main-context">Loading...</div>;
    if (error) return <div className="main-context">Error: {error}</div>;
    if (!crewmate) return <div className="main-context">Crewmate not found</div>;

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .delete()
            .eq('name', name)

        window.location="/gallery"
    }

    return (
        <div className="main-page">
            <div className="main-context">
                <h1>{crewmate.name}</h1>
                
                <div className="crewmate-detail">
                    <img src={crewmateCard} alt={crewmate.name} />
                    <div className="crewmate-info">
                        <div className="crewmate-stats">
                            <div className="stat-card">
                                <h3>Speed</h3>
                                <p className="value">{crewmate.speed} mph</p>
                            </div>
                            <div className="stat-card">
                                <h3>Color</h3>
                                <p className="value">{crewmate.color}</p>
                            </div>
                        </div>
                        
                        <p>
                            Meet {crewmate.name}, a speedy crewmate who travels at {crewmate.speed} mph! 
                            This {crewmate.color} crewmate is ready for any adventure in space.
                        </p>
                        
                        <div className="crewmate-actions">
                            <button className="btn-primary">Edit Crewmate</button>
                            <button className="btn-secondary" onClick={deleteCrewmate}>Delete Crewmate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrewmateDetails;