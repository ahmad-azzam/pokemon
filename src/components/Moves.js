import '../index.css'

export default function Moves({ data }) {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {
                    data.map(el => {
                        return (
                            <div className="text-center text-white bg-green-500 py-4 rounded-xl">
                                {el.move.name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}