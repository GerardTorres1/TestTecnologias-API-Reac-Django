import React, { useEffect, useState } from "react";

const Salida = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8000/api/post/";
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Salida</h1>
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Nombre : {item.title}</h5>
                        <p className="card-text">Contenido : {item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Salida;