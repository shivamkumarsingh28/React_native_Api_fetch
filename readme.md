# LUMOS-MOBILE App Development

[Live Demo](https://www.linkedin.com/posts/shivamsaeeam_react-native-is-a-javascript-framework-for-activity-7098279422176235520-LACs?utm_source=share&utm_medium=member_desktop)

React Native is a JavaScript framework for building native mobile apps. It uses the same design as React, letting you compose a rich mobile UI from declarative components. With React Native, you don't build a “mobile web app”, an “HTML5 app”, or a “hybrid app”. You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

Installation Process Setup Step by Step Guide

- Install NodeJS: The first step is to install NodeJS on your system. NodeJS is required to install and run the React Native command line interface (CLI). 

- Install Watchman: Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance when developing React Native apps. 

- Install the React Native CLI: The React Native CLI allows you to quickly create and run your project with simple commands such as react-native run-ios and react-native run-android. 

- Install Xcode: Xcode is Apple's IDE for developing iOS applications and it must be installed on your Mac before you can begin developing iOS applications with React Native. 

- Install Android Studio: Android Studio is Google's IDE for developing Android applications and it must be installed on your system before you can begin developing Android applications with React Native. 

- Set up the Android SDK: The Android SDK must be installed on your system before you can begin developing Android applications with React Native. 

- Set up an emulator: An emulator allows you to test your application on different versions of the Android operating system without having to own multiple devices or use cloud services such as AWS Device Farm or Firebase Test Lab (which are both paid services). 

## 🛠 Skills Tools Required For Installation And Setup Process

 - NodeJS  
 - Watchman  
 - VsCode  
 - Java JDK  
 - Android Studio  
 - The Android SDK
 - Mobile Emulator

# Back-End Development

JSON Server is a Node.js based mock API server that can be used to quickly create a fake REST API for testing and prototyping. It is designed to be used as a back-end for web and mobile applications, and can be used with any front-end technology, such as React, Angular, Vue, or even plain HTML and JavaScript.

Ngrok is a secure tunneling service that allows you to expose your localhost server to the internet. It provides an easy way to test webhooks and other web applications without having to deploy them publicly.

Installation Process: 
- Install Node.js: To install JSON Server, you must first install Node.js on your computer. You can download the latest version of Node from the official website (https://nodejs.org/en/). 
- Install JSON Server: Once Node is installed, you can use npm (Node Package Manager) to install JSON Server with the following command: npm install -g json-server 
- Install Ngrok: To install Ngrok, download the latest version from their website (https://ngrok.com/download). Once downloaded, unzip the file and run the ngrok executable in your terminal window with the following command: ./ngrok http 8080 
- Start JSON Server: To start JSON Server, run the following command in your terminal window: json-server --watch db.json 
- Expose Your Localhost Server With Ngrok: Finally, you can use Ngrok to expose your localhost server to the internet with the following command: ./ngrok http 8080

## 🛠 Skills Tools Required For Installation And Setup Process For Back-End 

 - NodeJS  
 - VsCode  
 - Json-server
 - ngrok-tunnel
 - json



## Command For Installation And Start Project

How to start this project 
- Front-end Part 

```bash
  git clone <repo link paste here>
  cd React_native_Api_fetch 
```

Now Install Required Package and run app for android

```bash
  npm i (npm install)
  npx react-native run-android
  choose option 'a' - Android Run
```

How to start this project
- Back-end Part


Now Install Required Package and run ngrok tunnel as well as json-server

```bash
  cd JsonServer  (Backend folder)
  npm i (npm install)
```

Run backend server 
```bash
  npm start tunnel   #tunnel run forward localhost to public host access through Api
  npm run db         # its a json database to save api request data in json
```
    

# Api CRUD Operation Perform With Json DataBase

- Api Fetch Data From Database - GET Reqest from url
```bash
  https://script.google.com/macros/s/AKfycbxyLFEAmw7-tFzLR9pSQQefY_jIORiAe7txlzxU9zSLTVWDQWtH3409yq1k9KZxbJnM/exec
```

- Api Save Data In Json Database - POST Request
```bash
http://66e6-117-194-58-133.ngrok.io/posts

{
`title`,
`author`
}

```

```bash 
{
  "posts": [
    {
      "author": "saeeam",
      "title": "Hello ",
      "id": 1
    },
    {
      "author": "sdfsd",
      "title": "dsffsdfsff",
      "id": 2
    }
  ],
  "user": [
    "any"
  ],
  "blog": {
    "any": []
  }
}
```


- Api Update Save Data In Json Database - UPDATE Request
```bash
http://66e6-117-194-58-133.ngrok.io/posts

{
`Post_id`,
`title`,
`author`
}

```

```bash 
{
  "posts": [
    {
      "author": "Shivam",
      "title": "Lumos Mobile App",
      "id": 1
    },
    {
      "author": "Saeeam",
      "title": "Json Database",
      "id": 2
    }
  ],
  "user": [
    "any"
  ],
  "blog": {
    "any": []
  }
}
```

- Api Delete Save Data In Json Database - DELETE Request
```bash
http://66e6-117-194-58-133.ngrok.io/posts

{
`Post_id`
}

```

```bash 
{
  "posts": [
    {
      "author": "Shivam",
      "title": "Lumos Mobile App",
      "id": 1
    },
    {
      "author": "Saeeam",
      "title": "Json Database",
      "id": 2
    }
  ],
  "user": [
    "any"
  ],
  "blog": {
    "any": []
  }
}
```
