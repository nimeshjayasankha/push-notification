import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import { firebaseCloudMessaging } from "../utils/firebase";

export default function App({ Component, pageProps }: AppProps) {
  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    // const messaging = firebase?.messaging();
    // messaging.onMessage((message: any) => {
    //   alert(message?.notification?.title);
    // });
  }
  return <Component {...pageProps} />;
}
