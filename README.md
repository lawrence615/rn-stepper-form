## Stepper Form

The designs of the app have been picked from Dribbble, from the great works of [Vishnu Prasad](https://dribbble.com/vlockn):
1. [EdTech Components](https://dribbble.com/shots/16077297-EdTech-Components)
2. [Editor Onboarding Components](https://dribbble.com/shots/11277570-Editor-Onboarding-Components)

>This is another self challenge to try and use RN skills learnt.

## How to run the app

Move into the app
```
$ cd <project>
```

Start metro server on one tab

```
$ react-native start --port=8082
```

OR

```
$ yarn start --port=8082 --reset-cache
```

*NB:* Make sure you have a device connected e.g. Android phone

To check:


   ```
   $ adb devices

   List of devices attached
   PY2MF5WQZCJ device         # Physical device
   ```

Run app on Android phone

```
$ npx react-native run-android --port=8082