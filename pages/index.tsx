import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  async function askNotificationPermission() {
    try {
      const permissionResult = await Notification.requestPermission();
      return permissionResult;
    } catch (error) {
      console.error("Error while asking for notification permission:", error);
      return null;
    }
  }

  async function handleNotificationPermission() {
    const permissionResult = await askNotificationPermission();
    if (permissionResult === "granted") {
      alert('ok')
      // User granted notification permission
      // Now you can subscribe to push notifications
    } else if (permissionResult === "denied") {
      alert('denied')

      // User denied notification permission
      // You can handle this case accordingly (e.g., show an informative message)
    } else if (permissionResult === "default") {
      alert('default')

      // User closed the permission prompt without making a choice
      // You can handle this case accordingly (e.g., show a prompt later)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
      <h1>React App with Push Notifications</h1>
      <button onClick={handleNotificationPermission}>
        Enable Push Notifications
      </button>
    </div>
    </div>
  )
}
