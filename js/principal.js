var estudiante= {

    instituto:{
        nombre:"INSTITUTO TECNOLOGICO SUPERIOR NELSON TORRES",
        direccion:"Cayambe-Ecuador",
        telefono:"(02) 211-0164"
    },

    carrera:{
        codigo:"DS405",
        nombre:"DESARROLLO DE SOFTWARE"
    },

    Asignatura:[
        {asignatura1:"Programacion de Aplicaciones Web", horas: 8, nota: 7},
        {asignatura2:"Desarrollo de Aplicaciones Moviles", horas: 7, nota: 5},
        {asignatura3:"Legislacion Informatica", horas: 4, nota:6}
    ],
    
    sumNotas: 0,

};

var Promedio;
estudiante.calcularPromedio=function(){

    for(var i= 0; i< this.Asignatura.length; i++){

        this.sumNotas=this.sumNotas+this.Asignatura[i].nota;

    }
    Promedio=(this.sumNotas/3).toFixed(2);
}

estudiante.imprimir=function(){

    this.calcularPromedio();

    alert("Promedio Total: " + Promedio);

    if(Promedio >7){
        alert("APROBADO");

    }else{
        alert("REPROBADO");
    }
}

estudiante.imprimir();