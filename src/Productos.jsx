
function Productos(props){

    return(
        <div className="card-producto">

            <div className="div-img">
                <img src={props.imagen}></img>
            </div>

            <div className="div-text">
                <h3>Nombre: {props.nombre}</h3>
                <p>Precio: $ {props.precio}</p>
            </div>     

        </div>
    )

}
export default Productos;