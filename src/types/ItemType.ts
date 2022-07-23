

type ItemType={
    id:string,
    name:string,
    description:string,
    // status:StatusType
    status: "OPEN"|"IN_PROGRESS"|"DONE",
    dateCreated?:string
}

export default ItemType;