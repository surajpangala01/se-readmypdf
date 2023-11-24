import sys
from gtts import gTTS
import pdfplumber

# Specify the PDF file path as a command line argument
pdf_path = f'pdfs/{sys.argv[1] +'_'+ sys.argv[2]}' 
# time,path = sys.argv[1].split('_')
# Open the PDF file
pdf_file = pdfplumber.open(pdf_path)

# Create a PDF reader object
text = ""

# Loop through each page and extract text
for page in pdf_file.pages:
    text += page.extract_text()

# Close the PDF file
# pdf_file.close()
pdf_file.close()
print(text)
# Initialize the gTTS object and convert the text to speech
tts = gTTS(text, lang='en')

# Save the audio to a file (optional)
tts.save(f"audio/{sys.argv[1]}_{sys.argv[2][:-4]}_output.mp3")

# Play the audio using your system's default audio player (optional)
# You can use a library like 'pygame' to play audio within your Python script.
# For example, you can install pygame with pip and use it like this:
# import pygame
# pygame.mixer.init()
# pygame.mixer.music.load("output.mp3")
# pygame.mixer.music.play()

# Or you can simply use an external media player to play the 'output.mp3' file.

