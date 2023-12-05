type footerPropsType = {
    title: string
}

export function Footer(props: footerPropsType) {
    return (
        <h6>{props.title}</h6>
    )
}