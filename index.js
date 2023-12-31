/**
 * @format
 */
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase } from '@react-native-firebase/app';
import './src/assets/fonts/Outfit-Bold.ttf';
import './src/assets/fonts/Urbanist-Bold.ttf';

const firebaseConfig = {
 
    "project_info": {
      "project_number": "656423335364",
      "project_id": "auth-e308d",
      "storage_bucket": "auth-e308d.appspot.com"
    },
    "client": [
      {
        "client_info": {
          "mobilesdk_app_id": "1:656423335364:android:3117a58513ebc13166e091",
          "android_client_info": {
            "package_name": "com.authentication"
          }
        },
        "oauth_client": [],
        "api_key": [
          {
            "current_key": "AIzaSyD1to6NJvkPLdWWtTvdKrMLMgHHGLw8G1c"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": []
          }
        }
      }
    ],
    "configuration_version": "1"
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const WrappedApp = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
