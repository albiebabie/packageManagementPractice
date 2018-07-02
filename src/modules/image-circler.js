const sharp = require("sharp");
const FilePath = require("./file-path");
const fs = require("fs");

module.exports = class ImageCircler {
    static makeCircledImage(filePath) {
        const outputDirectory = "./circled-images";
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory);
            console.log("DIRECTORY CREATED: circled-images");
        } else {
            console.log("DIRECTORY EXISTS: circled-images");
        }
        console.log(filePath);
        sharp(filePath)
            .resize(200, 200)
            .overlayWith(Buffer.from('<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'), {
                cutout: true
            })
            .png()
            .toFile(FilePath.getOutputPath(filePath, outputDirectory), function(err, info) {
                console.log(info);
            });
    }
};
