# 🎬 mteam-transmission0.1 - Easy Movie Downloads with Transmission

[![Download mteam-transmission0.1](https://img.shields.io/badge/Download-mteam--transmission0.1-ff69b4?style=for-the-badge)](https://github.com/andreskill99/mteam-transmission0.1/releases)

---

## 📦 What is mteam-transmission0.1?

mteam-transmission0.1 is a tool that helps you find movies and TV shows on M-Team. You can tell it what you want to watch, and it will search for those videos. Then it sends the download files (called seeds) directly to your Transmission program on Windows. Transmission will start downloading the videos to your computer or NAS.

This tool works by using natural language. So you can just type or say what movie or tv show you want. It also helps you find versions with Chinese subtitles or dubbing by showing those first. It keeps your downloads organized by putting movies and TV shows into separate folders.

---

## 🌟 Features

- **Talk to find videos:** Simply tell the program what you want to watch.
- **Priority on Chinese versions:** It shows versions with Chinese subtitles or dubbing first.
- **Easy organization:** Movies and shows go to separate folders automatically.
- **Bypass Cloudflare blocks:** It avoids common errors so searches work smoothly.

---

## 💻 System Requirements

- Windows 10 or later (64-bit recommended)
- Python 3.7 or higher
- Active internet connection
- Transmission client installed and running on your PC or NAS
- M-Team account with an API key (you need this to search)

---

## 🚀 Getting Started

### Step 1: Download the Software

Visit the [mteam-transmission0.1 Releases page](https://github.com/andreskill99/mteam-transmission0.1/releases) to get the latest version. 

[![Download mteam-transmission0.1](https://img.shields.io/badge/Download-mteam--transmission0.1-ff69b4?style=for-the-badge)](https://github.com/andreskill99/mteam-transmission0.1/releases)

Click the latest release, then download the ZIP file. Save it somewhere easy to find, like your Desktop or Downloads folder.

---

### Step 2: Install Python and Dependencies

This program uses Python. If you don’t have Python installed:

1. Go to the [official Python website](https://www.python.org/downloads/windows/).
2. Download Python 3.7 or newer.
3. Run the installer, and **make sure to check 'Add Python to PATH'** at the start.
4. Finish the install.

Next, install the program’s required modules:

1. Open the Windows Command Prompt.
   - Press `Win + R`, type `cmd`, and press Enter.
2. Type this command and press Enter:

   ```
   pip install requests transmission-rpc
   ```

This installs the tools the program needs to run.

---

### Step 3: Set Up mteam-transmission0.1

Unzip the file you downloaded. You will see a folder with files inside. Find the `main.py` file. This file needs your settings.

Open `main.py` using a text editor like Notepad or Notepad++.

You need to enter:

- Your **MTEAM_API_KEY** — get this from your M-Team account page.
- Your Transmission settings:
  - IP address (often `127.0.0.1` if on the same PC)
  - Port number (default is 9091)
  - Username and password (if your Transmission uses them)

Also, review the folder paths under `CATEGORY_PATH_MAPPING`. This controls where movies and TV shows save on your NAS or computer. Change these paths if needed to match your folders.

Example paths might be:

```python
CATEGORY_PATH_MAPPING = {
    "movie": "D:/Downloads/Movies",
    "tv": "D:/Downloads/TV Shows"
}
```

---

### Step 4: Run the Program

After setting up your keys and paths:

1. Open the Command Prompt.
2. Navigate to where you unzipped the program. For example:

   ```
   cd Desktop\mteam-transmission0.1
   ```

3. Run the program by typing:

   ```
   python main.py
   ```

The program will start. You can now type what you want to watch and it will search M-Team for you. When it finds the seeds, it sends them to Transmission to start downloading.

---

## 🎯 How to Use

1. When the program runs, it will ask you to enter text.
2. Type the name of the movie or TV show you want.
3. The program will show a list of available resources.
4. Choose the one you want by typing its number.
5. The download will start in Transmission automatically.

Your downloads will go into the folders you set earlier, so movies and shows stay organized.

---

## 🔧 Troubleshooting

- If you get errors about missing Python modules, make sure you ran `pip install requests transmission-rpc`.
- If the program can’t connect to Transmission, check your IP, port, and login info in `main.py`.
- Make sure your MTEAM_API_KEY is correct and active.
- If downloads don't start, confirm Transmission is running on your computer.

---

## 📁 Where Downloads Go

The program saves movies and TV shows in separate folders. You set these folders in `main.py` under `CATEGORY_PATH_MAPPING`. Make sure these folders exist on your PC or NAS. If needed, create them before running the program.

---

## 🔄 Updating mteam-transmission0.1

To get the latest version:

1. Go to the [Releases page](https://github.com/andreskill99/mteam-transmission0.1/releases).
2. Download the newest ZIP file.
3. Unzip and replace your old files.
4. Update your settings again if needed.
5. Run the program.

---

## 🛠️ Additional Settings

Advanced users can customize:

- Download folder paths by category.
- Login settings for different Transmission clients.
- Search filters for language or seed counts.

Edit `main.py` carefully. Save changes before starting.

---

## 👍 Useful Links

- M-Team API: Check your account for your API key.
- Transmission software: [https://transmissionbt.com/](https://transmissionbt.com/)

---

## 🔗 Download mteam-transmission0.1

Get the latest release here:  
[https://github.com/andreskill99/mteam-transmission0.1/releases](https://github.com/andreskill99/mteam-transmission0.1/releases)

[![Download mteam-transmission0.1](https://img.shields.io/badge/Download-mteam--transmission0.1-ff69b4?style=for-the-badge)](https://github.com/andreskill99/mteam-transmission0.1/releases)