import '../index.css'

export default function Base({ stats }) {


    return (
        <>
            <table className="w-full mt-5">
                {
                    stats.map((el, i) => {
                        return (
                            <tr key={i} className="h-10">
                                <td className="w-2/5">{el.stat.name}</td>
                                <td className="w-1/5 font-bold">{el.base_stat}</td>
                                <td className="w-2/5">
                                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-gray-200 absolute"></div>
                                        {
                                            i % 2 === 0 ? <div style={{ width: `${el.base_stat}%` }} className="h-full bg-red-500 absolute"></div> : <div style={{ width: `${el.base_stat}%` }} className="h-full bg-green-500 absolute"></div>
                                        }
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </>
    )
}