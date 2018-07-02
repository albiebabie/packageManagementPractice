module.exports = class FilePath {
    static removeDirectories(filePath) {
        return filePath.substring(filePath.lastIndexOf("/") + 1);
    }
    static removeExtension(filePath) {
        return filePath.substring(0, filePath.lastIndexOf("."));
    }
    static getOutputPath(filePath, outputDirectory) {
        const removedDirectories = this.removeDirectories(filePath);
        const removedExtension = this.removeExtension(removedDirectories);
        return `${outputDirectory}/${removedExtension}-circled.jpg`;
    }
};
