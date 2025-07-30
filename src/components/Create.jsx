import { useParams } from "react-router-dom"
import { supabase } from '../client'

function Create() {
    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .insert({name: form.name, speed: form.speed, color: form.color})
            .select();

        window.location = "/"
    }

    const [form, setForm] = useState({name: "", speed: 0, color: ""})

    const 

    return (
        <div>

        </div>
    )
}

export default Create;