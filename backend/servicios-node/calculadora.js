var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
La suma es : ${numero1 + numero2};
La resta es : ${numero1 - numero2};
La multiplicacion es : ${numero1 * numero2};
La division es : ${numero1 / numero2};
`

console.log(plantilla);

// Blog con MEAN STACK --> guiarse de API de este video(https://www.youtube.com/watch?v=OML9f6LXUUs) +  frontend del master de udemy JS
// Portafolio con Django --> Comprarlo de Udemy