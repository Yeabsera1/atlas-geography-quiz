"use client"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { configType, useQuizConfig } from '@/store'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  quiz
}: {
  children: React.ReactNode,
  quiz: React.ReactNode,
}) {
  const config = useQuizConfig((state:any) => state.config)
  let render = config.status ? quiz : children;

  return (
    <ClerkProvider>
      <html lang="en">
        
          <body className={inter.className}>
          <div className='navbar'>
          <div className='logoPart'>
            <img className='logo' src='./icon.png' alt='logo' />
            {/* <h1 className='logoText'> Atlas of the World</h1> */}
            </div>

          <div className="authButtons">
            <SignedOut>
              <SignInButton>
                  <button id='loginBtn'>Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />

            </SignedIn>
          </div>
          <hr />
          </div>
          {render}
        </body>
      </html>
    </ClerkProvider>
  )
}