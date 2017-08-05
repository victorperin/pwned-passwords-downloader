require('chai').should();

describe('get-files-information', () => {
  const getFilesInformation = require('./get-files-information');

  it('should get array of fileUrl', async () => {
    const result = await getFilesInformation();

    result[0].should.have.property('url');
    result[0].should.have.property('sha1');
    result[0].should.have.property('version');
  });

  it('should have the primary file', async () => {
    const result = await getFilesInformation();

    result[0].sha1.should.equal('90d57d16a2dfe00de6cc58d0fa7882229ace4a53');
  });
});
