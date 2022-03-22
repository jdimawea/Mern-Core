import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {

    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <p>Search for:</p>
                    <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option hidden>Select</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <div>
                        <span>Id</span>
                        <input type="text" name="id" value={id} onChange={e => setId(e.target.value)} />
                        <button>Explore</button>
                    </div>
                </form >
            </div >
        </div>
    )
}

export default Form