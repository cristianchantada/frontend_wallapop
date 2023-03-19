# Práctica del módulo de desarrollo del frontend del Bootcampt Web 14 de KeepCoding.
## 'Woala Pop!'.
### Cristian Varela Casas.

### Notas:

* He decidido incluir las fotografías en el proyecto, carpeta ./img, para mayor comodidad mía al desarrollarlo.

* En principio cree un controlador específico para la pantalla de carga (pintar y despintar spinner) para mantener los controladores independientes, utilizando para ello el patrón PubSub, pero no funcionó. A continuación cambié el controlador a patrón mediador. Tampoco funcionó (el de notificaciones fue bien a la primera y es exactamente lo mismo). Finalmente, debido a la inminente finalización del plazo de entrega, he tenido que crear función de pintado y despintado ("./utils/spinnerFunctions"), no logrando el objetivo de la autonomía de controladores. Ha quedado una mierda.

### Para arrancarlo y echarlo a andar:

1. copy and paste file db.js in the root of sparrest app and run backend server with:

```sh
    npm start
```

2. Run live server:

```sh
npx live-server
```
3. All user passwords are: 1234

