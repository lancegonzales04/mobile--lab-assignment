# Lab 1 Mobile Application: Spinning Native Reactive

## System Requirements
Ensure that your system meets the following features:

Operating system: Windows 10 (64-bit)
RAM: 8 GB or higher
CPU: 64:-bit processor

## Instructions for Installation
First step, go to --> https://reactnative.dev/docs/environment-setup?guide=native. Second step, click on the "React Native CLI Quickstart" make sure that the Development OS is set to --> (Windows) and the Target OS is set to --> (Android).

Step three, it is recommended to install Chocolately. If you already install Chocolately, you can skip this part but if you have not install Chocolately just follow the steps below.

[1]Right-click on CMD and and click on (Run as Administrator)

[2] Once the terminal has open, input this command.

 @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).
DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

[3] Input this command --> ( choco install -y nodejs-lts microsoft-openjdk11 ) in order to install Node and JDK

[4] Install Android Studio, make sure that the futures down below are selected. After installing Android studio, install Gradle in order to avoid any error or problems in the future.

-- [Android SDK] [Android SDK Platform] [Android Virtual Device (AVD)] --

## Instruction for Configuration
[1] Environment Variables
    Set this to the path of Android SDK "ANDROID_HOME"
    Set this to the path where JDK is installed "JAVA_HOME"

[2] Reactive Native Project Configuration
    Use this command to create a new Reactive project using:
-->  npx react-native init MyReactNativeApp
    Use this command to change into the project directory:
--> cd MyReactNativeApp

## Instruction for Running the project
[1] Open your command prompt in the project directory
[2] Run the command below in order to start the Android emulator
--> npx react-native run-android

## For Troubleshooting
Try the recommendation below if an error or a problem occurs. If these won't, ask peers, co-workers, or instructors for help.

[1]Check the official React Native documentation: https://reactnative.dev/docs/getting-started.

[2]Search for solutions on Stack Overflow: https://stackoverflow.com/questions/tagged/react-native.

## Extra Resources
Explore additional resources for learning and troubleshooting:

[1]React Native Documentation: https://reactnative.dev/docs.

[2]React Native GitHub Repository: https://github.com/facebook/react-native.

[3]Stack Overflow React Native Questions: https://stackoverflow.com/questions/tagged/react-native.

