import React, { useState } from "react";

const Formulario = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:8000/api/post/";

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content }),
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>Formulario</h1>
            <form className="p-3 border rounded" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        id="nombre"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contenido" className="form-label">
                        Contenido
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="contenido"
                        id="contenido"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
