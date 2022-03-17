import {useState} from 'react'

const App = () =>{
    const [value, setValue] = useState({normal:'init',texto:'por defecto',select:'',check:false})
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
        </div>
    )
}


export default App