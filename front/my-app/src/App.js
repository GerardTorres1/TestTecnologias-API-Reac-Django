import './App.css';
import { useEffect, useState } from 'react';
import Formulario from "./components/formulario/formulario";
import Salida from "./components/salida/salida";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/api/post/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <div className="text-center bg-info bg-gradient">
        <h1>Hola ppues</h1>
        <h2>Esto es una prueba de API Reac-Django</h2>
      </div>
      <Formulario onAddPost={handleAddPost} />
      <Salida posts={posts} />
    </div>
  );
}

export default App;