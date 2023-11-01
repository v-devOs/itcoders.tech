import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { MainLayout } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout title='itcoders.tech' description='Aquí si programamos :P'>
      <main className='flex justify-content align-center bg-black' style={{ width: '100vw', height: '96vh' }}>
        <h1 className='white-text f-size-100 ls-1'>itcoders.tech</h1>
      </main>
    </MainLayout>
  )
}
