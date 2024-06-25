"use server"

import { cookies } from 'next/headers'
const deleteCookie = () => {

    return cookies().delete('token')
}

export default deleteCookie