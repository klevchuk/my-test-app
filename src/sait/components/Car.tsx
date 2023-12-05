type topCarsType = {
    manufacturer: string,
    model: string
}

export const Car = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <table>
            <tbody>
            <tr>
                {topCars.map((objectFromTopCar, index) => {
                    return (
                        <td key={index}>{objectFromTopCar.manufacturer}</td>
                    )
                })}
            </tr>
            <tr>
                {topCars.map((objectFromTopCar, index) => {
                    return (
                        <td key={index}>{objectFromTopCar.model}</td>
                    )
                })}
            </tr>
            </tbody>
        </table>
    ) }
