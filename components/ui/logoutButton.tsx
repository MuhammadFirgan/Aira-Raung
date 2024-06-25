'use client'

import deleteCookie from '@/app/(auth)/gate/DeleteCookies'
import { useRouter } from 'next/navigation'


export default function LogoutButton() {

  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const confirmed = confirm('Apakah anda yakin ingin logout?')

    if(confirmed) {
      if(deleteCookie()) {
        router.push('/')
      }
    }

  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <button type="submit">Logout</button>
    </form>
  )
}
