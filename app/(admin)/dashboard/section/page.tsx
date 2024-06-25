'use client'
import { useEffect, useState } from "react"
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
import { bebas_neue } from "@/constans"
import { index, edit, show }  from "../action"
import UpdateForm from "@/components/UpdateForm"
import CreateForm from "@/components/CreateForm"

export default function Page() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [ isEdit, setIsEdit ] = useState(false)
    const [ isId, setIsId ] = useState("")
    const [ detail, setDetail ] = useState()
        // const [ state, formAction ] = useFormState(() => isEdit ? edit : create, null)

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const homeData = await index()
                console.log(homeData)
                setData(homeData)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleEditClick = async (id : string) => {
        
        setIsEdit(true)
        setIsId(id)

        const detailData = await show(id)
        setDetail(detailData)
        

        // const updateData = await edit(id)
       
    }

    

    // const handleSubmit = () => {
    //     if(isEdit) {

    //     } else {

    //     }
    // }

    if (isLoading) {
        return <div>Loading...</div>
    }

   

   

    return (
        <div className="flex flex-col lg:flex-row bg-gray-200 p-4 gap-4">
            <div className='w-full lg:w-[80%] bg-white p-2 rounded-lg'>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Tagline</TableHead>
                            <TableHead>Video</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, i) => (
                            <TableRow key={i}>
                                <input type="hidden" name="id" value={item.id}/>
                                <TableCell className="font-medium">{i + 1}</TableCell>
                                <TableCell><span className="line-clamp-1">{item?.tagline}</span></TableCell>
                                <TableCell>
                                    <video src={`http://127.0.0.1:8000/storage/${item?.video_url}`} width={320} height={240}></video>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge variant="warning" className="mb-1 mr-2 cursor-pointer" onClick={() => handleEditClick(item.id)}>Edit</Badge>
                                    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="bg-white rounded-lg w-full lg:w-auto p-4">
                <h1 className={`text-3xl ${bebas_neue.className}`}>Hero Section</h1>
                {isEdit ? (
                    <UpdateForm  data={detail} id={isId} />
                ) : (
                    <CreateForm />
                )}
                
            </div>
        </div>
    )
}
