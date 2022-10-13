export const makeNum = (value:string) =>{
    return value?.substring(0,value.indexOf('.') + 3)
}
export const shortenAddress = (address:string) =>{
    if(!address) return null
    return `${address.substring(0,6)}...${address.substring(address.length -4, address.length)}`

}