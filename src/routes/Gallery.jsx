import { supabase } from "../client";
import Crewmate from '../components/Crewmate'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' 

const Gallery = (props) => {
    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        const fetchCrewmates = async () => {
            const {data} = await supabase
                .from('crewmate')
                .select()
                .order('created_at', {ascending: false});

            setCrewmates(data);
        }
        fetchCrewmates();
    }, [props])


    return (
        <div className="main-context">
                <h1>Your Crewmate Gallery!</h1>
                {
                    crewmates && crewmates.length > 0?
                    [...crewmates]
                    .map((crewmate, index) => 
                        <Crewmate
                            key={index}
                            name={crewmate.name}
                            speed={crewmate.speed}
                            color={crewmate.color}
                        />
                    ) : <div>
                            <h2>{"You haven't made a crewmate yet!"}</h2>
                            <Link to="/create"><button>Create one here!</button></Link>
                        </div>
                }
        </div>
    )
}

export default Gallery;