1. install Node.js: https://nodejs.org/en/download/

2. Open commandprompt and go to the folder you extracted the source files into (for example type in: pushd D:\Discord\ if you extracted the zip in D:\Discord\)

3. Type: npm nodemon install -g

3.5. Type: npm install express request body-parser

4. Type: SET DISCORD_WEBHOOK=<url of your discord's webhook bot>   (no angled brackets!, ex: SET DISCORD_WEBHOOK=https://etcetc.)

5. Type: "npm run msg" for a single line message 
	or "npm run msglink" for a message with a link attached to it.

6. Open your browser and put in localhost in the address bar.

7. Click submit for the BOT to post the message.

hit Ctrl + C in the console will end the process