'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export async function createUser(prevData: any, formData: FormData) {

    const account = {
        username: formData.get('username'),
        password: formData.get('password')
    }



    const response = await fetch(`${process.env.BASE_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(account)
    })

    const result = await response.json();
    console.log(result)
    
    if(result.status === false) {
       console.error('error')
    } else {
        cookies().set('token', result.token, { secure: true, httpOnly: true })
        redirect('/dashboard')
    }

    return {
        errors: {
            username: !account.username ? "field ini harus diisi" : 'error',
            password: !account.password ? "field ini harus diisi" : 'error',
        }

    }
}

