var assert = require("assert");
const FilePath = require("../src/modules/file-path");

describe("FilePath", function() {
    describe("#removeDirectories()", function() {
        it("should remove all directories from the file path", function() {
            assert.equal(FilePath.removeDirectories("./dir-one/dir-two/donkey.jpeg"), "donkey.jpeg");
        });
    });
    describe("#removeExtension()", function() {
        it("should remove the extension from the file path", function() {
            assert.equal(FilePath.removeExtension("./test.jpeg"), "./test");
        });
    });
    describe("#getOutputFilePath()", function() {
        it("should return output file path", function() {
            assert.equal(FilePath.getOutputPath("./test.jpeg", "./test-images"), "./test-images/test-circled.jpg");
        });
    });
});
