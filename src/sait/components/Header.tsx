type headerPropsType = {
    title: string
}

// export function Header(props: headerPropsType) {
//     return (
//         <h1>{props.title}</h1>
//     )
// }

export const Header = (props: headerPropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}