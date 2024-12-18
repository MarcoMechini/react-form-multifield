import { useState } from 'react'
import data from './data/data'

function App() {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    content: ""
  })

  const handleInputData = (e) => {
    setPost(post => ({
      ...post,
      [e.target.name]: e.target.value
    }))
  }

  const sendPost = event => {
    event.preventDefault()
    //aggiungere il nuovo parametro ad un campo dentro l'oggetto sottostante
    setPost([...post, { id: Date.now(), title: newPost }])

  }

  const deletePost = (postId) => {
    setPost(post.filter(post => post.id !== postId))
  }

  return (
    <>
      <div>
        <form onSubmit={sendPost}>

          <label htmlFor="desc">Post content</label>
          <input
            type="text"
            name="title"
            id="desc"
            value={post.title}
            onChange={handleInputData}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
      {(post.length !== 0) ? post.map(curPost => <div key={curPost.id}>
        {curPost.title}
        <button onClick={() => deletePost(curPost.id)}>delete</button>
      </div >
      ) : <p>Senza nulla</p>}

    </>
  )
}

export default App
