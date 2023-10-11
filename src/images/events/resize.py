import os

list = os.listdir('.')
for file in list:
    if file.endswith('.jpg') or file.endswith('.png') or file.endswith('.webp'):
        os.system(f'convert -resize 1000x1000 {file} {file}')

