const Boom = require('boom')
const uuidv4 = require('uuid/v4')
const fs = require('fs')
const crypto = require('crypto')
const TAG = "server.service.file-uploader.file-uploader"
const { logger } = require('../../lib/reporter')

function fileHandler(file, options) {
    if (!file) {
        throw new Error('no file')
    }
    let extention = getFileExtension1(file.hapi.filename)

    if (options.fileFilter && !options.fileFilter(file.hapi.filename)) {
        throw Boom.badData('image file type not allowed')
    }

    const filename = uuidv4()
    const path = `${options.dest}${filename}.${extention}`
    const fileStream = fs.createWriteStream(path)
    const hash = crypto.createHash("sha512")

    let chunks = []

    return new Promise((resolve, reject) => {
        file.on('error', function (err) {
            reject(err)
        })

        file.on('data', function (d) {
            hash.update(d)

            if (options.withBase64) {
                chunks.push(d)
            }
        })

        file.pipe(fileStream)

        file.on('end', function (err) {
            const fileDetails = {
                fieldname: file.hapi.name,
                originalname: file.hapi.filename,
                filename,
                mimetype: file.hapi.headers['content-type'],
                destination: `${options.dest}`,
                path,
                size: fs.statSync(path).size,
                sha512: hash.digest('base64')
            }

            if (options.withBase64) {
                const fileBuffer = Buffer.concat(chunks);
                Object.assign(fileDetails, {
                    base64: fileBuffer.toString('base64')
                })
            }

            resolve(fileDetails)
        })
    })
}

function filesHandler(files, options) {
    if (!files || !Array.isArray(files)) {
        throw new Error('no files')
    }

    const promises = files.map(x => fileHandler(x, options))
    return Promise.all(promises)
}

async function uploader(file, options) {
    logger.info(TAG, "call service uploader")
    if (!file) throw new Error('no file(s)')

    return Array.isArray(file) ? filesHandler(file, options) : fileHandler(file, options)
}

async function removeFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                return reject(err)
            }

            return resolve('File removed')
        })
    })
}

function getFileExtension1(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}

module.exports = [{
    name: 'services.document.upload',
    method: uploader
}, {
    name: 'services.document.remove',
    method: removeFile
}]