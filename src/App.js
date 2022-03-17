import {useState} from 'react'

const App = () =>{
    const [value, setValue] = useState({normal:'init',texto:'por defecto',select:'',check:false,estado1:'feelsbadman'})
    const handleChange = ({target}) =>{
        setValue((state)=>({
            ...state,
            [target.name]: target.type === 'checkbox' 
            ? target.checked 
            : target.value
        }))
    }
    console.log(value)
    return(
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange}/>
            <textarea name='texto' onChange={handleChange} value={value.texto}/>
            <select value={value.select} name="select" onChange={handleChange}>
                <option value=''>--Seleccione--</option>
                <option value='happywaifu'>--Happy Waifu--</option>
                <option value='sadwaifu'>--Sad Waifu--</option>
                <option value='angrywaifu'>--Angry Waifu--</option>
                <option value='feelsbadman'>--No Waifu--</option>
            </select>
            
            <input
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked = {value.check}
            />
            <div onChange={handleChange}>
                <label><b>Waifu</b></label>
                <input
                    type="radio" value="happy" name = 'estado'
                /> Happy
                <input
                    type="radio" value="angry" name = 'estado'
                /> Angry 
                <input
                    type="radio" value="feelsbadman" name = 'estado'
                /> No
            </div>
            <br/>
            <div>
                <label><b>Waifu 1</b></label>
                <input
                    onChange={handleChange}
                    type="radio"
                    value="happy" 
                    name = 'estado1'
                    checked = {value.estado1 === 'happy'}
                /> Happy
                <input
                    onChange={handleChange}
                    type="radio"
                    value="angry"
                    name = 'estado1'
                    checked = {value.estado1 === 'angry'}
                /> Angry 
                <input
                    onChange={handleChange}
                    type="radio"
                    value="feelsbadman"
                    name = 'estado1'
                    checked = {value.estado1 === 'feelsbadman'}
                /> No
            </div>
        </div>
    )
}


export default App