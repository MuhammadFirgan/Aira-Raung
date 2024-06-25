'use client'
import { create } from "@/app/(admin)/dashboard/action";
import Form from "./ui/form";
import { useFormState } from "react-dom"


export default function CreateForm() {
  const [ state, formAction ] = useFormState(create, null)

  return <Form action={formAction} label1="Video" label2="Tagline" buttonName="Create" color="primary" />
  
  
}
