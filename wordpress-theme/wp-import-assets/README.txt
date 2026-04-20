WordPress Media Import Package

1) Upload all files from wp-import-assets/pps-import/ to:
   wp-content/uploads/pps-import/

2) In power-protection-services-images-import.xml replace:
   https://your-domain.com
   with your real site URL (e.g. https://example.com)

3) In WordPress admin go to Tools > Import > WordPress and import the XML file.

This creates attachment records in the Media Library pointing to those uploaded files.