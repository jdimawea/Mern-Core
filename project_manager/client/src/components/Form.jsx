import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(res => {
                setTitle("")
                setPrice(0)
                setDescription("")
                props.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} />
            </div>
            <div>
                <label>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} name="price" value={price} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} name="description" value={description} />
            </div>
            <button>Add Product</button>
        </form>
    )
}

export default Form