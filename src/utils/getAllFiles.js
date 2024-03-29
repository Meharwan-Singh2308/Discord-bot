const fs = require('fs')
const path = require('path')


module.exports = (directory,foldersOnly = false) => {
    let filenames = [];

    const files = fs.readdirSync(directory,{ withFileTypes:true})

    for ( const file of files)
    {
        let filePath = path.join(directory,file.name)

        if(foldersOnly){
            if(file.isDirectory())
            {
                filenames.push(filePath)
            }
        }else{
            if(file.isFile())
            {
                filenames.push(filePath)
            }
        }
    }


    return filenames;
}