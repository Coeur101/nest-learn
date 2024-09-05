import * as multer from 'multer'
import * as fs from 'node:fs'
// 自定义storage，用于拿到file文件，然后存放在自定义的文件夹内
// 与module中使用一致
const storage = multer.diskStorage({
  destination(req, file, cb) {
    try {
      // 创建文件夹
      fs.mkdirSync('uploads')
    } catch (error) {
    }
    cb(null, 'uploads')
  },
  filename(req, file, cb) {
    // 自定义文件名称
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname
    cb(null, uniqueSuffix)
  }
})
export { storage }
