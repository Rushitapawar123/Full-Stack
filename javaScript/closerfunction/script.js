
function greeting(name)
{
    return function(){
    console.log("wellcome to ricr :",name);
};
}

const greetrushita=greeting("rushita");
 const greetPrince=greeting("prince");

 greetrushita();
 greetPrince();