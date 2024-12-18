import { useState } from 'react'
import data from './data/data'

function App() {
  const setObject = {
    id: 0, title: '', content: ''
  }
  const [post, setPost] = useState(data)
  const [newPost, setNewPost] = useState(setObject)
  //per aggiungere più campi inserire un nuovo state

  const sendPost = event => {
    event.preventDefault()
    //aggiungere il nuovo parametro ad un campo dentro l'oggetto sottostante
    setPost([...post, { id: Date.now(), title: newPost.title, content: newPost.content }])
    setNewPost(setObject)
  }

  const deletePost = (postId) => {
    setPost(post.filter(post => post.id !== postId))
  }

  const handleInputData = e => {
    setNewPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div>
        <form onSubmit={sendPost}>
          {/* creare un componente per l'input (don't repete your self) */}
          <div>
            <label htmlFor="desc">Post title</label>
            <input
              type="text"
              name="title"
              id="desc"
              value={newPost.title}
              onChange={handleInputData}
            />
          </div>
          <div>
            <label htmlFor="desc">Post content</label>
            <input
              type="text"
              name="content"
              id="desc"
              value={newPost.content}
              onChange={handleInputData}
            />
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
      {(post.length !== 0) ? post.map(curPost => <div key={curPost.id}>
        <div>{curPost.title}</div>
        <div>{curPost.content}</div>

        <button onClick={() => deletePost(curPost.id)}>delete</button>
      </div >
      ) : <p>Senza nulla</p>}

    </>
  )
}

export default App
