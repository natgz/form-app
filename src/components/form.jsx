import '../index';
import { useState } from "react";


function Form () {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('')
    const [isPending,setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setIsPending(true)

        setTimeout(() => {
            console.log('new blog added')
            setIsPending(false)
        }, 1000);
 
        // fetch ('',{
        //     method: 'POST',
        //     header: {'content.Type': 'application/json'},
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     console.log('new blog added')
        // })

    }

    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value )}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value )}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value )}
                >
                    <option value="" disabled>Select...</option>
                    <option value="mario ">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                
                { isPending ? 
                    <button disabled>Loading...</button> 
                : 
                    <button>Add Blog</button>
                }

            </form>
        </div>
    )
}

export default Form;