//FUNCION PARA EL LOGIN
function login(form){
    if (form.u.value=="enrique") {
        if (form.c.value=="123") {
            location="login.html"
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

//#region TRANSFERENCIAS


//FUNCIONES PARA TRANFERIR DE 1 A 2Y3
function Transfer1to2()
{
//VARIABLES DE LOS SALDOS
let Cantidad1 = parseInt(document.getElementById('C1').value);
let Cantidad2 = parseInt(document.getElementById('C2').value);
let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad1>=10){
    document.getElementById('C1').value =(Cantidad1-CantidadTotal);
}                
else{
    alert('Necesitas más saldo para realizar una transferencia');
}
if(Cantidad2<990){
    document.getElementById('C2').value = (Cantidad2+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}       
}

function Transfer1to3()
{
//VARIABLES DE LOS SALDOS
let Cantidad1 = parseInt(document.getElementById('C1').value);
let Cantidad3 = parseInt(document.getElementById('C3').value);
let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad1>=10){
    document.getElementById('C1').value =(Cantidad1-CantidadTotal);
}                
else{
    alert('Necesitas más saldo para realizar una transferencia');
}
if(Cantidad3<990){
    document.getElementById('C3').value = (Cantidad3+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}       
}


//FUNCIONES PARA TRANFERIR DE 2 A 1Y3
function Transfer2to1()
{
//VARIABLES DE LOS SALDOS
let Cantidad1 = parseInt(document.getElementById('C1').value);
let Cantidad2 = parseInt(document.getElementById('C2').value);

let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad2>=10){
    document.getElementById('C2').value =(Cantidad2-CantidadTotal);
}                
else{
    alert('Necesitas más saldo para realizar una transferencia');
}
if(Cantidad2<990){
    document.getElementById('C1').value = (Cantidad1+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}       
}

function Transfer2to3()
{
//VARIABLES DE LOS SALDOS
let Cantidad2 = parseInt(document.getElementById('C2').value);
let Cantidad3 = parseInt(document.getElementById('C3').value);

let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad2>=10){
    document.getElementById('C2').value =(Cantidad2-CantidadTotal);
}                
else{
    alert('Necesitas más saldo para realizar una transferencia');
}
if(Cantidad3<990){
    document.getElementById('C3').value = (Cantidad3+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}       
}



//FUNCIONES PARA TRANFERIR DE 3 A 1Y2
function Transfer3to1()
{
//VARIABLES DE LOS SALDOS
let Cantidad1 = parseInt(document.getElementById('C1').value);
let Cantidad3 = parseInt(document.getElementById('C3').value);
let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad3>=10){
    document.getElementById('C3').value =(Cantidad3-CantidadTotal);
}                
else{
    alert('Necesitas más saldo para realizar una transferencia');
}
if(Cantidad2<990){
    document.getElementById('C1').value = (Cantidad1+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}       
}

function Transfer3to2()
{
//VARIABLES DE LOS SALDOS
let Cantidad2 = parseInt(document.getElementById('C2').value);
let Cantidad3 = parseInt(document.getElementById('C3').value);
let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad3>=10){
    document.getElementById('C3').value =(Cantidad3-CantidadTotal);
}                
else{
    alert('Necesitas más saldo para realizar una transferencia');
}
if(Cantidad3<990){
    document.getElementById('C2').value = (Cantidad2+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}       
}
//#endregion


//#region DEPOSITOS

//FUNCION DEPOSITO CUENTA 1
function Deposit1(){
//VARIABLES DE LOS SALDOS
let Cantidad1 = parseInt(document.getElementById('C1').value);
let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);

//OPERACIONES
if(Cantidad1<=990){
    document.getElementById('C1').value =(Cantidad1+CantidadTotal); 
}
else{
    alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
}    
}

//FUNCION DEPOSITO CUENTA 2
function Deposit2(){
    //VARIABLES DE LOS SALDOS
    let Cantidad2 = parseInt(document.getElementById('C2').value);
    let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);
    
    //OPERACIONES
    if(Cantidad2<=990){
        document.getElementById('C2').value =(Cantidad2+CantidadTotal); 
    }
    else{
        alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
    }    
    }

//FUNCION DEPOSITO CUENTA 3
function Deposit3(){
    //VARIABLES DE LOS SALDOS
    let Cantidad3 = parseInt(document.getElementById('C3').value);
    let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);
    
    //OPERACIONES
    if(Cantidad3<=990 ){
        document.getElementById('C3').value =(Cantidad3+CantidadTotal); 
    }
    else{
        alert('La cuenta a la que deseas transferir ha alcanzado su limite de saldo, lo sentimos.')
    }    
    }

//#endregion


//#region RETIROS

//FUNCION RETIRO CUENTA 1
function Withdraw1(){
    //VARIABLES DE LOS SALDOS
    let Cantidad1 = parseInt(document.getElementById('C1').value);
    let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);
    
    //OPERACIONES
    if(Cantidad1>10){
        document.getElementById('C1').value =(Cantidad1-CantidadTotal); 
    }
    else{
        alert('Necesitas más saldo para realizar esta operación')
    }    
    }
    
//FUNCION RETIRO CUENTA 2
    function Withdraw2(){
        //VARIABLES DE LOS SALDOS
        let Cantidad2 = parseInt(document.getElementById('C2').value);
        let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);
        
        //OPERACIONES
        if(Cantidad2>10){
            document.getElementById('C2').value =(Cantidad2-CantidadTotal); 
        }
        else{
            alert('Necesitas más saldo para realizar esta operación')
        }    
        }
    
//FUNCION RETIRO CUENTA 3
    function Withdraw3(){
        //VARIABLES DE LOS SALDOS
        let Cantidad3 = parseInt(document.getElementById('C3').value);
        let CantidadTotal = parseInt(document.getElementById('cantidadATransferir').value);
        
        //OPERACIONES
        if(Cantidad3>10){
            document.getElementById('C3').value =(Cantidad3-CantidadTotal); 
        }
        else{
            alert('Necesitas más saldo para realizar esta operación')
        }    
        }
    
    //#endregion