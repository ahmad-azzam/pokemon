import '../index.js'

export default function About({ height, weight, abilities }) {
    const newAbilities = abilities.map(el => el.ability.name)
    return (
        <>
            <div className="lg:px-44 md:px-28">
                <table className="w-full mt-5">
                    <tr className="h-10">
                        <td className="w-1/3">Height</td>
                        <td className="w-2/3 font-bold">{height}</td>
                    </tr>
                    <tr className="h-10">
                        <td className="w-1/3">Weight</td>
                        <td className="w-2/3 font-bold">{weight}</td>
                    </tr>
                    <tr className="h-10">
                        <td className="w-1/3">Abilities</td>
                        <td className="w-2/3 capitalize font-bold">
                            {newAbilities.join(', ')}
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}