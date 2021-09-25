import axios from 'axios'
import { useEffect, useState } from 'react'
import '../index.css'

export default function Card({ el }) {
    const [image, setImage] = useState('')
    const [types, setTypes] = useState([])
    const [color, setColor] = useState('')

    useEffect(async () => {
        try {
            const { data } = await axios({
                method: 'get',
                url: el.url
            })
            const { data: species } = await axios({
                method: 'get',
                url: data.species.url
            })
            setImage(data.sprites.front_default)
            setTypes(data.types)
            setColor(species.color.name)
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <>
            <div
                className={
                    color === 'green' ? 'h-36 w-46 bg-green-400 rounded-xl' :
                        color === 'red' ? 'h-36 w-46 bg-red-400 rounded-xl' :
                            color === 'blue' ? 'h-36 w-46 bg-blue-400 rounded-xl' :
                                'h-36 w-46 bg-yellow-900 rounded-xl'
                }

            >
                <div className="flex px-3 pt-4 pb-2 h-full">
                    <div className="flex flex-col">
                        <h1 className="text-white capitalize">{el.name}</h1>
                        <div>
                            <div className="flex">
                                <div className="mt-2 flex flex-col space-y-2 w-26">
                                    {
                                        types.map((el, i) => {
                                            return (
                                                <span key={i} className={
                                                    color === 'green' ? 'px-3 py-1 w-auto text-center rounded-xl bg-green-300 text-sm text-white shadow-xl' :
                                                        color === 'red' ? 'px-3 py-1 w-auto text-center rounded-xl bg-red-300 text-sm text-white shadow-xl' :
                                                            color === 'blue' ? 'px-3 py-1 w-auto text-center rounded-xl bg-blue-300 text-sm text-white shadow-xl' :
                                                                'px-3 py-1 w-auto text-center rounded-xl bg-yellow-700 text-sm text-white shadow-xl'
                                                }>
                                                    {el.type.name}
                                                </span>
                                            )
                                        })
                                    }

                                </div>
                                <div className="mt-auto">
                                    <img className="w-full h-full object-cover object-center" src={image} alt="pokemon" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}