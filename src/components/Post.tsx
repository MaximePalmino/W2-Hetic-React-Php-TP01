
interface Props {

    title: string,
    content: string
}

const Post: React.FC<Props> = ({title, content}) => {
    return (
        <>
        <h2>{title}</h2>
        <p>{content}</p>
        </>
    )
}

export default Post