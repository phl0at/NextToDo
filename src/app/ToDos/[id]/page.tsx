import prisma from "../../../../script"

export default async function List({params}: any){

    const res = await prisma.toDo.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    const data = await res.json()

    console.log(params)
}
