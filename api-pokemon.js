

const pinta = (datos) => {



    datos.results.map((pokemon, indice) => {

        // traernos la tbody del dom para editarlo
        const tbody = document.querySelector('.tbody')
        console.log(tbody)
        // Creamos los nodos con los datos

        const columnaNombre = document.createElement("td");
        const nombre = document.createTextNode(pokemon.name)
        columnaNombre.appendChild(nombre)

        const columnaFoto = document.createElement("td");
        const foto = document.createElement("img")
        foto.src = `https://pokeres.bastionbot.org/images/pokemon/${indice + 1}.png`;
        foto.width = 150;
        columnaFoto.appendChild(foto)

        const columnaVer = document.createElement("td");
        const ver = document.createElement("button")
        const textoBoton = document.createTextNode('Ver Datos')
        ver.appendChild(textoBoton)

        ver.addEventListener('click', () => traerDatos(indice + 1))
        columnaVer.appendChild(ver)

        const fila = document.createElement("tr")
        fila.appendChild(columnaNombre)
        fila.appendChild(columnaFoto)
        fila.appendChild(columnaVer)

        tbody.appendChild(fila)

    })
}


const traerDatos = (num) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            pintarDatos(myJson)
        });

}





function pintarDatos(tipos) {

    const tipo1 = tipos.types[0].type.name;
    let tipo2;
    if (tipos.types[1]) {
        tipo2 = tipos.types[1].type.name;
    }

    if (tipo1 && tipo2) {
        return alert(`Su tipo es ${tipo1} y ${tipo2}`)
    } else {
        return alert(`Su tipo es ${tipo1}`)
    }



}




fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        return response.json();
    })
    .then(myJson => {
        pinta(myJson)
    });


