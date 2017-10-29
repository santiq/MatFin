# MatFin

*MatFin* es una Calculadora Financiera pensada para ser utilizada en el desarrollo de clases de Matemática Financiera en estudios de grado.

Por la sencillez de su interfaz resulta de fácil aplicación, contribuyendo en la simplificación de cálculos y facilitando la toma de decisiones financieras, tanto en la vida personal como profesional de los usuarios. Se presenta como un software libre, de aplicación educativa, descarga gratuita y código abierto, apto para su uso no comercial y libre de publicidad. La idea de sus creadores fue contribuir en la propagación del conocimiento de las matemáticas del valor tiempo del dinero, depositando en manos de los estudiantes-usuarios una herramienta más tendiente a facilitar dicho proceso.

# Imagenes

![MainMenu](https://user-images.githubusercontent.com/7070683/32139959-7e0ebd9a-bc2f-11e7-88ea-6c3b291606ff.png)


# Pre requisites
```bash
sudo npm install -g ionic cordova
npm install
```
# Development

```
 ionic serve
```

# Generate APK

## Pre requisites

```
- echo y | android update sdk --no-ui --all --filter tools,platform-tools,extra-google-m2repository,extra-google-google_play_services,extra-android-support,extra-android-m2repository,android-25
- echo y | android update sdk --no-ui --all --filter build-tools-25.0.0
```

## Building
```bash
ionic cordova platform add android
ionic cordova build android -Y
```
