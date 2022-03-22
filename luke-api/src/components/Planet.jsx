import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Planet = () => {

    const { id } = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planet ?
                    <div>
                        <h1>{planet.name}</h1>
                        <p>CLIMATE: {planet.climate}</p>
                        <p>TERRAIN: {planet.terrain}</p>
                        <p>SURFACE WATER: {planet.surface_water}</p>
                        <p>POPULATION: {planet.population}</p>
                    </div> :
                    <h1>"These aren't the droids you're looking for"</h1>
            }
        </div>
    )
}

export default Planet