import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface FormProps {
    action: () => void
    label1: string
    label2: string
    value: string
    buttonName: string
    color: string
    id: string
    inputType: 'text' | 'file'
}

export default function Form({ action, label1, label2, value = "", buttonName, color, id = "", inputType = 'text' } : FormProps) {
 
  return (
    <form action={action} className="mt-8" encType="multipart/form-data">
      <input type="text" name="id" value={id} />
        <div className="grid w-full max-w-sm items-center gap-4 mb-4">
            <Label htmlFor={label1}>{label1}</Label>
            <Input id={label1} type={inputType} name={label1} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-4 mb-4">
            <Label htmlFor={label2}>{label2}</Label>
            <Textarea id={label2} className="h-36" name={label2} defaultValue={value}/>
        </div>
        <Button variant={color} className="w-full">{buttonName}</Button>
    </form>
  )
}
