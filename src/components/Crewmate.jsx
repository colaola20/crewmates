import './Crewmate.css'
import crewmateCard from '../assets/crewmateCard.png'
import { Link } from 'react-router-dom'

const Crewmate = (props) => {
        const getColorValue = (color) => {
        const colors = {
            red: '#ff6b6b',
            green: '#51cf66', 
            blue: '#339af0',
            purple: '#9775fa',
            yellow: '#ffd43b',
            orange: '#ff8cc8',
            pink: '#ff6b9d',
            rainbow: 'linear-gradient(45deg, red, orange, yellow, green, blue, purple)'
        };
        return colors[color] || '#646cff';
    };
    return (
        <div className={`crewmate crewmate-${props.color}`}>
            <img src={crewmateCard} alt="Some crewmate" width="100"/>
            <h3>Name of Crewmate: {props.name}</h3>
            <h3>Speed of Crewmate: {props.speed}</h3>
            <h3>Color of Crewmate: 
                <span style={{ color: getColorValue(props.color), fontWeight: 'bold' }}>
                    {props.color}
                </span>
            </h3>
            <div className="crewmate-actions">
                <Link to={`/crewmate/${props.id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Crewmate;