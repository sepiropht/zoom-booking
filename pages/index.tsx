import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

const SSR = typeof window === 'undefined'
interface Task {
  TaskID: number
  OwnerID: number
  Title: string
  Description: string
  StartTimezone: null
  Start: Date
  End: Date
  EndTimezone: null
  RecurrenceRule: ''
  RecurrenceID: null
  RecurrenceException: null
  isAllDay: false
}

const Home: NextPage = () => {
  useEffect(() => {
    if (!SSR) {
      window.location.href =
        'https://zoom.us/oauth/authorize?response_type=code&client_id=jqJV_mCYTwysBsjkPlegng&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fbooking'
    }
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Zoom Booking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className={styles.footer}>
        <a
          href="https://github.com/sepiropht"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>sepiropht</span>
        </a>
      </footer>
    </div>
  )
}

export default Home
