import React,{ useState, useEffect } from 'react';

import Post from './post';


const App = ({initialCount}) => {


  let [count,setCount] = useState(initialCount);
  let [posts,setPosts] = useState([
    {
      name:'Super awesome hooks',
      body:'Everything is awesome when your are part of a team'
    }
  ])


  const addOne = () =>{
    setCount( prevCount => { 
      return prevCount + 1 
    })
  }


  const restOne = () =>{
    setCount( prevCount => { 
      return prevCount - 1 
    })
  }

  const addOnePost = () => {
    let newpost =   {
      name:'Super awesome hooks 2',
      body:'Everything is awesome when your are part of a team 2'
    }

    setPosts([
      ...posts,
      newpost
    ])
  }


  useEffect(()=>{
    // console.log(count)

    return () => {
      console.log('use effect count')
    }

  },[count])

  // useEffect(()=>{
  //   console.log('POSTS')
  // },[posts])


  // useEffect(()=>{
  //   console.log('MOUNTED')
  // },[])

  const removePost = () => {
    setPosts([])
  }


  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one +</button>
      <button onClick={restOne}>Rest one -</button>
      <button onClick={()=> setCount(initialCount)}>Reset</button>


      { posts.map((item,i)=>(
          <Post item={item} key={i}/>
      ))}

      <button onClick={addOnePost}>Add one more post</button>
      <button onClick={removePost}>REMOVE POSTS</button>
      
    </>
  )
}


export default App;
