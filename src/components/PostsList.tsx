
import Post from "./Post"


const PostsList: React.FC = () => {

    const articles: object[] = [
        {
            titre: 'Article 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
        {
            titre: 'Article 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
        {
            titre: 'Article 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
        {
            titre: 'Article 4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
    ]

    return (
        <>
        <h1>Hey</h1>
        {articles.map((article: any) => (

            <Post title={article.titre} content={article.content}  />

        ))}
        </>
    )
}

export default PostsList