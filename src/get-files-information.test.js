require('chai').should();
const getFilesInformation = require('./get-files-information');

describe('get-files-information', () => {
    it('should get array of fileUrl', async () => {
        const result = await getFilesInformation(),
            len = result.length - 1;
        for (let i = len; i >= 0; --i)
            ['file', 'date', 'size', 'description', 'sha1', 'links']
                .forEach(prop => result[i].should.have.property(prop));
    });

    it('should have the primary file', async () => {
        const result = await getFilesInformation();
        [
            'c267424e7d2bb5b10adff4d776fa14b0967bf0cc',
            '87437926c6293d034a259a2b86a2d077e7fd5a63'
        ].forEach((sha, i) => result[i].sha1.should.equal(sha))
    });
});