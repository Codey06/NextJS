import{promises as fs} from 'fs'
 import path from 'path'

 const dateFilePath=path.join(process.cwd(),'/helper/data.json')

 export const readData= async() => {
    const jsonData=await fs.readFile(dateFilePath, 'utf8')
    return JSON.parse(jsonData)
 }