import { useState } from 'react'
import data from './data/data'

function App() {
  const [post, setPost] = useState(data)
  const [newPost, setNewPost] = useState('')
  //per aggiungere più campi inserire un nuovo state

  const sendPost = event => {
    event.preventDefault()
    //aggiungere il nuovo parametro ad un campo dentro l'oggetto sottostante
    setPost([...post, { id: Date.now(), title: newPost }])
    setNewPost('')
  }

  const deletePost = (postId) => {
    setPost(post.filter(post => post.id !== postId))
  }

  return (
    <>
      <div>
        <form onSubmit={sendPost}>
          {/* creare un componente per l'input (don't repete your self) */}
          <label htmlFor="desc">Post content</label>
          <input
            type="text"
            name="desc"
            id="desc"
            value={newPost}
            onChange={e => {
              setNewPost(e.target.value)
            }}
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
