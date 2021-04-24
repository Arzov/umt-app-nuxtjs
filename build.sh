#!/bin/dash

# -----------------------------------------------
# Elimina directorios android y ios
# -----------------------------------------------
printf "<< Eliminando directorios android y ios >>\n"

ANDROID_DIR="./android"
if [ -d "$ANDROID_DIR" ]; then
  rm -R -f "$ANDROID_DIR"
  wait $!
  printf "* Carpeta android eliminada!"
fi

IOS_DIR="./ios"
if [ -d "$IOS_DIR" ]; then
  rm -R -f "$IOS_DIR"
  wait $!
  printf "\n* Carpeta ios eliminada!\n"
fi


# -----------------------------------------------
# Corre comandos para generar directorios
# android y ios
# -----------------------------------------------
printf "\n<< Compilando para android >>\n"
npx cap add android
wait $!

printf "\n<< Compilando para ios >>\n"
npx cap add ios
wait $!


# -----------------------------------------------
# Corre comandos para copiar directorios
# android y ios modificados en sus respectivos
# destinos
# -----------------------------------------------
printf "\n<< Copiando archivos para android >>\n"

ANDROID_MAIN_DIR="./src/android"
if [ -d "$ANDROID_MAIN_DIR" ]; then
  cp -R "$ANDROID_MAIN_DIR" "./"
  wait $!
  printf "* Carpeta android copiada!\n"
fi

printf "\n<< Copiando archivos para ios >>\n"

IOS_MAIN_DIR="./src/ios"
if [ -d "$IOS_MAIN_DIR" ]; then
  cp -R "$IOS_MAIN_DIR" "./"
  wait $!
  printf "* Carpeta ios copiada!\n"
fi


# -----------------------------------------------
# Corre comandos para generar icon y splash
# -----------------------------------------------
printf "\n<< Generando iconos para android >>\n"
cordova-res android --skip-config
wait $!

printf "\n<< Generando iconos para ios >>\n"
cordova-res ios --skip-config
wait $!

printf "\n<< Copiando iconos >>\n"
node resources/resources.js
wait $!


printf "\n\n"
echo Compilación completada correctamente, presione cualquier tecla para finalizar...
read EXIT
