import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import '../index.css'

export default function Home() {
    const [pokemons, setPokemons] = useState([])
    useEffect(async () => {
        try {
            const { data } = await axios({
                method: 'get',
                url: 'https://pokeapi.co/api/v2/pokemon'
            })
            setPokemons(data.results)
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5">
                    <h1 className="mb-5 text-2xl font-bold">Pokedex</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                        {
                            pokemons?.map((el, i) => {
                                return <Card key={i} el={el} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}