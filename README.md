# Generador de Código Intermedio
 Generación de Código Intermedio realizado en javaScript el cual permite escribir un código como este:

```
declare suma() begin
static pi : 1,
dynamic value,
dynamic cont : 0,

si(2+2 >= 1) begin

end sino begin
end

print pi + 12

end

```

y convertirlo a código de javaScript:

```
function suma() {
const pi = 1;
let value;
let cont = 0;
if(2+2>=1) {
} else  {
} 
console.log( pi + 12 );
} 
```

## Setup
- git clone https://github.com/EnmanuelEstrella22/Codigo-Intermedio.git
- npm install
- npm start

## View
![Captura de pantalla de 2021-10-28 16-12-14](https://user-images.githubusercontent.com/56686883/139328550-fa3c0b5d-5c14-4c44-95e0-0fa30262438a.png)



