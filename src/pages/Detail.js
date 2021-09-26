import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react/cjs/react.development'
import About from '../components/About'
import Base from '../components/Base'
import Location from '../components/Location'
import Moves from '../components/Moves'
import '../index.css'

export default function Detail() {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [color, setColor] = useState('')
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])
    const [stats, setStats] = useState([])
    const [location, setLocation] = useState([])
    const [moves, setMoves] = useState([])
    const [isAbout, setIsAbout] = useState(true)
    const [isBase, setIsBase] = useState(false)
    const [isLocation, setIsLocation] = useState(false)
    const [isMoves, setIsMoves] = useState(false)
    useEffect(async () => {
        try {
            const { data } = await axios({
                method: 'get',
                url: `https://pokeapi.co/api/v2/pokemon/${id}/`
            })
            const { data: pokemonLocation } = await axios({
                method: 'get',
                url: data.location_area_encounters
            })
            const { data: species } = await axios({
                method: 'get',
                url: data.species.url
            })
            setPokemon(data)
            setName(data.name)
            setImage(data.sprites.other.dream_world.front_default)
            setStats(data.stats)
            setHeight(data.height)
            setWeight(data.weight)
            setAbilities(data.abilities)
            setTypes(data.types)
            setMoves(data.moves)
            setLocation(pokemonLocation)
            setColor(species.color.name)
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <>
            <div className="flex flex-col h-screen mb-14">
                <div
                    className={
                        color === 'green' ? 'bg-green-400 h-2/5' :
                            color === 'red' ? 'bg-red-400 h-2/5' :
                                color === 'blue' ? 'bg-blue-400 h-2/5' :
                                    'bg-yellow-900 h-2/5'
                    }
                >
                    <div className="flex justify-between p-5">
                        <div className="text-white capitalize font-bold text-4xl">
                            <h1>{name}</h1>
                            <div className="flex space-x-3 mt-2">
                                {
                                    types.map(el => {
                                        return (
                                            <div className={
                                                color === 'green' ? 'capitalize px-3 py-1  text-center rounded-xl bg-green-300 text-sm text-white shadow-xl' :
                                                    color === 'red' ? 'capitalize px-3 py-1  text-center rounded-xl bg-red-300 text-sm text-white shadow-xl' :
                                                        color === 'blue' ? 'capitalize px-3 py-1  text-center rounded-xl bg-blue-300 text-sm text-white shadow-xl' :
                                                            'capitalize px-3 py-1  text-center rounded-xl bg-yellow-700 text-sm text-white shadow-xl'
                                            }
                                            >
                                                {el.type.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="text-white font-bold text-2xl flex items-center">
                            <h1>
                                {
                                    id < 10 ? `#00${id}` : `#0${id}`
                                }
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-4/5 -mt-10 rounded-t-3xl">
                    <div className="flex justify-center -mt-28">
                        <img src={image} width="180" alt="pokemon" />
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-evenly">
                            <button
                                className="py-5 px-2 hover:border-2"
                                onClick={() => {
                                    setIsAbout(true)
                                    setIsBase(false)
                                    setIsLocation(false)
                                    setIsMoves(false)
                                }}
                            >
                                About
                            </button>
                            <button
                                className="py-5 px-2 hover:border-2"
                                onClick={() => {
                                    setIsAbout(false)
                                    setIsBase(true)
                                    setIsLocation(false)
                                    setIsMoves(false)
                                }}
                            >
                                Base Stats
                            </button>
                            <button
                                className="py-5 px-2 hover:border-2"
                                onClick={() => {
                                    setIsAbout(false)
                                    setIsBase(false)
                                    setIsLocation(true)
                                    setIsMoves(false)
                                }}
                            >
                                Location
                            </button>
                            <button
                                className="py-5 px-2 hover:border-2"
                                onClick={() => {
                                    setIsAbout(false)
                                    setIsBase(false)
                                    setIsLocation(false)
                                    setIsMoves(true)
                                }}
                            >
                                Moves
                            </button>
                        </div>
                        <hr />
                        <div className="px-8 overflow-auto h-96">
                            {
                                isAbout && <About height={height} weight={weight} abilities={abilities} />
                            }
                            {
                                isBase && <Base stats={stats} />
                            }
                            {
                                isLocation && <Location data={location} color={color} />
                            }
                            {
                                isMoves && <Moves data={moves} color={color} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}