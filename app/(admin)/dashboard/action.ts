'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import axios from 'axios';

const BASEURL = process.env.BASE_URL
const token = cookies().get('token')
const cookie_value = token.value


async function index() {
//   

    try {
        const response = await fetch(`${BASEURL}/home`, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${cookie_value}`
          },
      
        })
        const result = await response.json()

        if(result.status === false) {
            redirect('/')
        }
    
        return result.data

    } catch (error) {
        console.log(error)
    }

}

async function create(prevData: any, formData: FormData) {

  

    const addData = {
        tagline: formData.get('Tagline'),
        video: formData.get('Video')
    }

    formData.append('tagline', addData.tagline)
    formData.append('video', addData.video)

    try {
        const response = await fetch(`${BASEURL}/home`, {
            method: 'POST',
            headers: {
                // "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${cookie_value}`
            },
            cache: 'no-store',
            body: formData
        });
        const result = await response.json();
        console.log(result)


        if (result.status === false) {
            console.error(result);
        } else {
            console.log('ok');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    return {
        errors: {
            tagline: !formData ? "field ini harus diisi" : 'error',
            video: !formData ? "field ini harus diisi" : 'error',
        }

    }
}

async function show(id : string) {
    try {
        const response = await fetch(`${BASEURL}/home/${id}`, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${cookie_value}`
          },
      
        })
        const result = await response.json()

        if(result.status === false) {
            redirect('/')
        }
    
        return result.data

    } catch (error) {
        console.log(error)
    }
}

async function edit( prevData: any, formData: FormData) {

   
    const updateData = {
        tagline: formData.get('Tagline'),
        video: formData.get('Video')
        
    }
    const id = formData.get('id')

    formData.append('tagline', updateData.tagline)
    formData.append('video', updateData.video)




    try {
        const response = await fetch(`${BASEURL}/home/${id}`, {
            method: 'PUT',
            headers: {
                
                'Authorization': `Bearer ${cookie_value}`
            },
            cache: 'force-cache',
            body: formData
        });
        const result = await response.text();

        console.log(result)


        if (result.status === false) {
            console.error(result);
        } else {
            console.log('ok');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    return {
        errors: {
            tagline: !formData ? "field ini harus diisi" : 'error',
            video: !formData ? "field ini harus diisi" : 'error',
        }

    }
}

export { index, create, edit, show };

