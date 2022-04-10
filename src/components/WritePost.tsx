import { useState } from "react"


interface WritePostProps {

    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    setIsType: React.Dispatch<React.SetStateAction<string>>
}

const WritePost: React.FC<WritePostProps> = ({setTitle, setContent, setIsType}) => {

    const [newTitle, setNewTitle] = useState<string>('')
    const [newContent, setNewContent] = useState<string>('')

    const newTitleHandler = (e: any) => {
        setNewTitle(e.target.value)
    }
    const newContentHandler = (e: any) => {
            setNewContent(e.target.value)
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        setTitle(newTitle)
        setContent(newContent)
        setIsType('writePost')
    }




    return (
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" value={newTitle}  onChange={newTitleHandler} />
            <label>Content</label>
            <input type="text" value={newContent} onChange={newContentHandler} />
            <button>Envoyer du text</button>
        </form>
    )
}

export default WritePost