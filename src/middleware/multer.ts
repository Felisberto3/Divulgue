import multer from "multer";
import path from "path";
import { v4 as uuid4 } from "uuid";

const destination = path.resolve(__dirname, "..", "..","uploads")

const storage = multer.diskStorage({
    destination,

    filename: (req, file, cb) => {
        const uui = uuid4()

        const fileName = `${uui}.${file.originalname.split('.').pop()}`

        cb(null,fileName)
    }

})

const upload = multer({ storage })

export { upload }