var app=angular.module("app",[]);


app.controller("nombre_controller",function($scope){
    $scope.nombre="JUAN";
} );


app.controller("lista_controller",function($scope){
   var lista= $scope;
console.log(lista);
   lista.productos=[
       {
           id:1, nombre:"agua", precio:100
       },
       {
        id:2, nombre:"arroz", precio:1200
    }
   ];

   console.log(lista);

    
} );