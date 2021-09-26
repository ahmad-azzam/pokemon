import '../index.css'

export default function Moves({ data, color }) {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {
                    data.map(el => {
                        return (
                            <div className={
                                color === 'green' ? 'text-center text-white bg-green-500 py-4 rounded-xl' :
                                    color === 'red' ? 'text-center text-white bg-red-500 py-4 rounded-xl' :
                                        color === 'blue' ? 'text-center text-white bg-blue-500 py-4 rounded-xl' :
                                            'text-center text-white bg-yellow-700 py-4 rounded-xl'
                            }
                            >
                                {el.move.name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}