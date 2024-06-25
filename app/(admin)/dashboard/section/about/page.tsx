import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { bebas_neue } from "@/constans"
import RichEditor from "@/components/RichEditor"




export default function page() {
return (
  <div className="flex flex-col lg:flex-row bg-gray-200 p-4 gap-4">
    <div className='w-full lg:w-3/4 bg-white p-2 rounded-lg'>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Image</TableHead>
                <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell><span className="line-clamp-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat laboriosam beatae omnis inventore iure, nemo sint fugiat earum provident ullam fugit minus illum reiciendis doloremque saepe sit repellendus nulla? Adipisci.</span></TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-center">
                  <Badge variant="warning" className="mb-1">Edit</Badge>
                  <Badge variant="destructive">Delete</Badge>

                </TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </div>
    <div className="bg-white rounded-lg w-full lg:w-auto p-4">
      <h1 className={`text-3xl ${bebas_neue.className}`}>Hero Section</h1>
      <form action="" className="mt-8">
        <div className="grid w-full max-w-sm items-center gap-4 mb-4">
          <Label htmlFor="Tagline">Tagline</Label>
          {/* <Textarea id="Tagline" className="h-36" /> */}
          <RichEditor />
        </div>
        <div className="grid w-full max-w-sm items-center gap-4 mb-4">
          <Label htmlFor="video">Video</Label>
          <Input id="video" type="file" />
        </div>
        <Button variant="primary" className="w-full">Button</Button>

      </form>
    </div>
  </div>
)
}
