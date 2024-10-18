import os
import speech_recognition as sr
from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, filters


# Инициализация распознавателя
recognizer = sr.Recognizer()


# Функция для обработки голосовых сообщений
async def handle_voice_message(update: Update, context):
    voice_file = await update.message.voice.get_file()
    voice_path = f"{voice_file.file_id}.ogg"
    
    # Скачивание голосового сообщения
    await voice_file.download(voice_path)

    # Конвертация из ogg в wav
    wav_path = voice_path.replace(".ogg", ".wav")
    os.system(f"ffmpeg -i {voice_path} {wav_path}")

    # Использование SpeechRecognition для перевода голоса в текст
    with sr.AudioFile(wav_path) as source:
        audio = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio, language="ru-RU")  # русский язык
            await update.message.reply_text(f"Распознанный текст: {text}")
        except sr.UnknownValueError:
            await update.message.reply_text("Не удалось распознать голосовое сообщение.")
        except sr.RequestError as e:
            await update.message.reply_text(f"Ошибка сервиса распознавания: {e}")

    # Удаление файлов
    os.remove(voice_path)
    os.remove(wav_path)

# Основной код бота
async def main():
    application = ApplicationBuilder().token("8053654855:AAHBJyVSkUF7rhUtvmiOUlm-BIk7aaKw1v8").build()

    voice_handler = MessageHandler(filters.VOICE, handle_voice_message)
    application.add_handler(voice_handler)

    await application.start()
    await application.idle()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
