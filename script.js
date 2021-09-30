/**
 * endpoint donde se va consumir la api rest
 */
const endpoint="https://gdcdc7d0011250f-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto/"

/**
 * consumiento metodo get la Api de Cloud para visualizar en el cliente 
 */

function peticionGet(){

    $.ajax({

            method:"GET",
            url:endpoint,
            success:function(data){
                console.log(data)
            },
            error:function(error){
                console.log("Error al Consumir Api Oracle Cloud ")
            }
    });
   
}
/**funcion para peticion post */
function peticionPost(){

    /**
     * objeto producto
     */

    const producto={
       codprod:"1",
       nomprod:"Coca Cola 1.5",
       precio:4000,
       inventario:200
    }
    let data=JSON.stringify(producto)
    /*
    $.ajax({

         method:"post",
         url:endpoint

    });
    */
   console.log(data)
}


peticionPost()