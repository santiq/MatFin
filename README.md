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
