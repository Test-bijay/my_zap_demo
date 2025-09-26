import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Loads .env file

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "How do I integrate ChatGPT with GitHub?"}
    ]
)

print(response['choices'][0]['message']['content'])
