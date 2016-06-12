var EPUB = EPUB || {};

EPUB.open = function() {
  filename = 'downloads/HPMOR.epub';

  zip = new ZipLoader(filename);
  file = zip.load('HPMOR.epub//content.opf');

  return file;
};
