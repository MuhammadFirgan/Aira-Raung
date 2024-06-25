'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { createUser } from "./action";

export default function page() {

  const [ state, formAction ] = useFormState(createUser, null)

  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-80 shadow-2xl bg-white rounded-lg px-10 py-5">
        <h1 className="text-center text-3xl mb-5">Login</h1>
        <form action={formAction}>
          <div className="grid w-full sm:w-52 lg:w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="Username" className="mb-2">Username</Label>
            <Input type="text" id="Username" placeholder="Username ..." name="username" />
            <span className="text-xs text-red-500">{state?.errors.username}</span>
          </div>
          <div className="grid w-full sm:w-52 lg:w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="Password" className="mb-2">Password</Label>
            <Input type="password" id="Password" placeholder="Password..." name="password" />
          </div>
          <Button className="w-full">Login</Button>
          
        </form>

      </div>
    </div>
  )
}
