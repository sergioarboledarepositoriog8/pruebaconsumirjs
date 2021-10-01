/**
 * endpoint donde se va consumir la api rest
 */
const endpoint = "https://gdcdc7d0011250f-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto/"

/**
 * consumiento metodo get la Api de Cloud para visualizar en el cliente 
 */

function peticionGet() {

    $.ajax({

        method: "GET",
        url: endpoint,
        success: function (data) {
            //console.log(data)
            mostrarProducto(data.items)


        },
        error: function (error) {
            console.log("Error al Consumir Api Oracle Cloud ")
        }
    });

}

/**
 * 
 * funcion mostrar Producto
 */
function mostrarProducto(productos) {
    console.log("***************************")
    productos.forEach(producto => {
        console.log("Codigo Producto "+producto.codprod)
        console.log("Nombre Producto "+producto.nomprod)
        console.log("Precio Producto "+producto.precio)
        console.log("Inventario "+producto.inventario)
        console.log("***************************")
    }
    )
}


/**funcion para peticion post */
function peticionPost() {

    const data = {
        codprod: "2",
        nomprod: "Lecha",
        precio: 3000,
        inventario: 12
    }
    let datasend = JSON.stringify(data)

    $.ajax({

        method: "POST",
        url: endpoint,
        data: datasend,
        dataType: 'json',
        contentType: "application/json",
        complete: function (response) {
            console.log(response.status)
        },
        error: function (error) {

        }
    });

}
/**peticion put */

function peticionPut() {

    const data = {
        codprod: "1",
        nomprod: "Coca Cola 1.5 1",
        precio: 40001,
        inventario: 2001
    }
    let datasend = JSON.stringify(data)
    $.ajax({

        method: "PUT",
        url: endpoint,
        data: datasend,
        dataType: 'json',
        contentType: "application/json",
        complete: function (response) {
            console.log("Actualizo Registro!!!")
        },
        error: function (error) {

        }
    });
}
/**funcion delete */
function peticionDelete() {

    const data = {
        codprod: "1"
    }
    let datasend = JSON.stringify(data)
    $.ajax({

        method: "DELETE",
        url: endpoint,
        data: datasend,
        dataType: 'json',
        contentType: "application/json",
        complete: function (response) {
            console.log("Elimino Registro!!")
        },
        error: function (error) {

        }
    });
}





peticionGet()