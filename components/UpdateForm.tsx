'use client'
import { useFormState } from "react-dom"
import Form from './ui/form'
import { edit } from "@/app/(admin)/dashboard/action"

interface UpdateFormProps {
  id: string;
  data: object;
}

export default function UpdateForm( { id, data } : UpdateFormProps ) {
    
    const [ state, formAction ] = useFormState(edit, null)

    if (!data ) {
      
      return <div>Loading...</div>;
    }
  
  return <Form action={formAction} label1="Video" label2="Tagline" buttonName="Update" color="warning" value={data.tagline}  />
  
}
