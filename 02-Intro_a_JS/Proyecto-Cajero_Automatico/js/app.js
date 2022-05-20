// Funciones para el inicio
//               Cuenta1    Cuenta2    Cuenta3
//Usuarios       Mali       Gera       Maui
//Contraseñas    1234       4321       2468

function accesoCuenta1(form){
    if (form.u.value=="Mali") {
        if (form.c.value=="1234") {
            location="Cuentas/cuenta1.html"
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

function accesoCuenta2(form){
    if (form.u.value=="Gera") {
        if (form.c.value=="4321") {
            location="Cuentas/cuenta2.html"
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

function accesoCuenta3(form){
    if (form.u.value=="Maui") {
        if (form.c.value=="2468") {
            location="Cuentas/cuenta3.html"
        } else {
            alert("error de password");
        }
    } else {
        alert("error de usuario");
    }
}

//FUNCION DEPOSITO
function Deposito(){
    //VARIABLES DE LOS SALDOS
    let Saldo = parseInt(document.getElementById('S').value);
    let CantidadTotal = parseInt(document.getElementById('Monto').value);
    
    //OPERACIONES
    if(Saldo<990){
        document.getElementById('S').value =(Saldo+CantidadTotal); 
    }
    if((Saldo+CantidadTotal)>990){
        alert('ADVERTENCIA: La cantidad que desea ingresar supera el limite de saldo en la cuenta');
    }
    }

    //FUNCION RETIRO
    function Retiro(){
        //VARIABLES DE LOS SALDOS
        let Saldo = parseInt(document.getElementById('S').value);
        let CantidadTotal = parseInt(document.getElementById('Monto').value);
        
        //OPERACIONES
        if(Saldo>10){
            document.getElementById('S').value =(Saldo-CantidadTotal); 
        }
        if((Saldo-CantidadTotal)<10){
        alert('ADVERTENCIA: No puede retirar esa cantidad');
        }
        }
