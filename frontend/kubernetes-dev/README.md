Vamos a explicar para que sirve cada uno de los ficheros de configuración para levantar un proyecto en GCE (Google Compute Engine). Y una vez explicado para que sirven
nos meteremos dentro de estos ficheros para explicar para que sirve cada uno de los parámetros.

**Fichero de configuración namespaces.yaml**

Sirve para independizar todos nuestros proyectos en la misma máquina y de esta manera securizar también nuestra infraestructura.

**Fichero de configuración deployment.yaml**

En español despliegue, este fichero de configuración sirve para deplegar una aplicación en uno o varios pods con una configuración específica/amoldada a tus necesidades 
o a las necesidades del cliente.

**¿Que son los pods?**

Pods: Son los objetos mas pequeños y básicos que se pueden desplegar en Kubernetes con ID diferentes entre ellos. Estos pods pueden contener uno o mas contenedores,
(docker) para por ejemplo tener un wordpress en un contenedor y un sftp en otro contenedor en el mismo POD y no tener que tener desplegados dos proyectos, uno
para el SFTP y otro para el wordpress, consumes menos recursos en tus nodos (máquinas).

**Fichero de configuración ingress.yaml**

En kubernetes un ingress es un fichero de configuración que permite el acceso a un servicio de tu aplicación desde fuera de kubernetes (internet).
El acceso se configura creando un conjunto de reglas que definen qué conexiones entrantes llegan a qué servicios. Básicamente es un balanceador (en nuestro caso
utilizamos nginx), donde tengamos nuestro dominio comprado enlazamos nuestro dominio a la IP pública del balanceador para que de esta manera una vez se haga una petición
va a la IP pública del balanceador y este hace una búsqueda local donde esta el ingress configurado con esa URL y este ingress esta a su vez enlazado a un servicio (ahora
mas adelante lo explicaremos) que es el que se comunica con el POD donde tenemos nuestra aplicación. En este ingress también se configura los certificados SSL, esto se
configura mediante unos parámetros que van dentro de la parte de "annotations", los certificados SSL van montados por cert-manager.

**Fichero de configuración service.yaml**

En kubernetes los servicios donde van a ir los puertos que necesitan ser expuestos para tu aplicación, puedes exponer tantos puertos como tu aplicación necesiten.



