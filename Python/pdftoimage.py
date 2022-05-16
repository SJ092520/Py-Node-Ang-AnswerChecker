import sys
from pdf2image import convert_from_path
from PIL import Image

pdfFilePath = sys.argv[1]
fileFolderPath = sys.argv[2]

images = convert_from_path(pdfFilePath)
counter=0
temp_images = []
for i, image in enumerate(images):
    fname = "image" + str(i) + ".png"
    image.save(fileFolderPath+"/images/"+fname, "PNG")
    temp_images.append(fname)
    counter+=1