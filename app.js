var app=angular.module("app",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl:"cajero.html",
        controller:"lista_controller"
    })
    .when("/productos", {
        templateUrl:"productos.html",
        controller:"lista_controller"
    });
})


app.controller("nombre_controller",function($scope){
    $scope.nombre="JUAN";

} 

);


app.controller("lista_controller",function(){
   var lista= this;
   var n=2;
   var n_carrito=1;

   lista.productos=[
            {       id:1, nombre_producto:"agua", precio:100  },
            {      id:2, nombre_producto:"arroz", precio:1200  }
   ];

   lista.carrito=[];

   lista.addProduct= function(){
       console.log("click");
       var nombre_producto=lista.nombre_producto;
       var precio=lista.precio;
 
       if(nombre_producto!= "" && precio !="" && !isNaN(precio)){
           n++;
           lista.productos.push({id:n, nombre_producto:nombre_producto, precio :precio});
           lista.nombre_producto="";
           lista.precio="";
           console.log( lista.productos);
       } 
   }

   lista.addCarrito=function(){
  
    var id =lista.selectedProduct;
    var cantidad=lista.cantidad ;
    var producto=lista.productos.find(function(obj){
        return obj.id==id;
    });

    if(producto != undefined && cantidad >0 ){
        lista.carrito.push({
            id:n, nombre_producto:producto.nombre_producto, 
            precio:producto.precio,
            cantidad:cantidad,
            total:producto.precio*cantidad
        },  
        n_carrito++);

    }
   }

    lista.getTotalCarrito= function(){
       let total=0;
       lista.carrito.forEach(element=> {
           total+=element.total;
           console.log("total:"+total,element)
          
       });
       return total;
   }


lista.update= function () {
    return lista.productos;
}

} );