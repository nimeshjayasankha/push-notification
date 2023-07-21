import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { firebaseCloudMessaging } from '../utils/firebase';

export default function App({ Component, pageProps }: AppProps) {
  const [tokenValue,setTokenValue]=useState('')
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('event for the service worker', event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
       
        if (token) {
          console.log('token', token);
          setTokenValue(token)
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  },[tokenValue]);

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    // const messaging = firebase?.messaging();
    // messaging.onMessage((message: any) => {
    //   alert(message?.notification?.title);
    // });
  }
  return <Component {...pageProps} />;
}
