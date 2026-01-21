### Llave SSH.



Al vincular un repositorio por medio del comando *git remote add,* necesitamos utilizar algún protocolo seguro, como *HTML* o *SSH.*



En el caso de usar *SSH* se debe generar una clave en la computadora y en nuestra cuenta de GitHub; esto para garantizar la

autenticación, ya que GitHub verifica si quien esta realizando el push de los commits tiene permiso para hacerlo.



### Generación de una llave SSH.



Antes de ejecutar el comando *git push*, necesitamos generar una llave SSH. La generación de la lleve se hace a través del terminal,

con el comando:



 	***ssh-keygen -t ed25519 -C "TU EMAIL AQUI"***



Al ejecutar el comando para generar la clave, se hace una pregunta y el terminar se queda bloqueado esperando nuestra respuesta:



 	***Generating public/private ed25519 key pair.***

 	***Enter file in which to sabe the key (/home/usuario/.ssh/id\\\_ed25519):***



Esta pregunta es para indicar el directorio en nuestra computadora en el que se guardará la clave, y entre paréntesis se indica el

directorio predeterminado. Se recomienda solo presionar la tecla Enter para que la clave se guarde en el directorio predeterminado,

ya que Git puede encontrar esta clave automáticamente cada vez que ejecutemos el comando git push.



Después de presionar Enter, se presentará una nueva pregunta en el terminal:

 

 	***Enter passphrase (enter for no passphrase):***



Esta segunda pregunta es para indicar si deseamos agregar una contraseña a la clave SSH que se generará. Si escribes una contraseña,

cada vez que ejecutes el comando ***git push*** será necesario ingresar esa contraseña. Si no se escribe nada y solo se presiona la tecla

Enter, la clave se generará sin la protección de una contraseña.



Por ultimo, la tercera y ultima pregunta es solo para confirmar la contraseña anterior:



 	***Enter same passphrase again:***



La clave se generará y se mostrará el siguiente mensaje en el terminal:



 	***Your identification has been saved…………***

	***Your public key has been saved in...……
	The key fingerprint is:
	SHA256:...………………
	The key´s randomart…………
	+--\\\[ED25519 256]--+***

	***| .OO=..	|***

	***| ..O.+.	|***

	***| . …. .	|***

	***|  .  .O . .	|***

	***| .  ..S+ = O	|***

	***| . .  ++O+ = +	|***

	***|  . . O =O.\\\* =|***

	***|   .  +=\\\*E=.	|***

	***+----\\\[SHA256]-----+***



En la primera linea del mensaje se iedentifica el directorio en tu computadora en el que se guardo la llave. Ahora, solo accede a ese 

directorio para tener acceso a la llave SSH.





### Registrando la llave SSH en GitHub.



Después de generar la llave, necesitamos registrarla en nuestra cuenta de GitHub, para que asi GitHub pueda identificarnos y autenticarnos 

al ejecutar el comando ***git push*** desde nuestra computadora.



Accede a la pagina de llaves SSH de tu cuenta en GitHub y haz clic en el botón ***New SSH key*** o Nueva llave SSH para realizar el registro de

la clave.



Observa el formulario que se muestra para realizar el registro, contiene tres campos:



* Title o Titulo: Ingresa un apodo para tu clave SSH (por ejemplo: computadora casa).
* Key type o Tipo de clave: Elige el tipo de Authentication Key o Clave de Autenticación.
* Key o Clave: En este campo debes pegar el contenido del archivo de tu clave SSH pública (archivo id\_ed25519.pub).



Después de realizar este procedimiento, será posible sincronizar el repositorio local con el remoto, enviando los nuevos commits con el 

comando ***git push***.









