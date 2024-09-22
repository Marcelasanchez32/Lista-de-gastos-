let listaNombresgastos = [];
let listaValoresgastos = [];

//Esta función se invoca al momento de que el usuario hace click en el 
//boton
function clickBoton(){
    let let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    
    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert("Click de usuario");
    actualizarListaGastos();  
}

function actualizarListaGastos(){ 
    const listaElementos = document.querySelectorAll("listadeGastos");
    const totalElementos = document.querySelectorAll("totalGastos");
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresgastos.forEach((elemento,_posicion,) => {
        const valorGasto = Number(listaValoresGastos[_posicion]);
        
        htmlLista += `<li>${elemento} USD ${valorGasto.toFixed(2)};
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>";
        //Calculamos el total de gastos        
        totalGastos += Number (valorGasto);
    
    });
    
     listaElementos.innerHTML = htmlLista;
     totalElementos.innerHTML = totalGastos.toFixed(2);
     limpiar();
}

funcion limpiar(){
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value ="";
}

function eliminarGasto(_posicion){

    listaNombresgastos.splice(_posicion,1);
    listaValoresgastos.splice(_posicion,1);
    actualizarListaGastos();
}