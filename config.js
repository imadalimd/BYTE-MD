
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklFdG5YZmowZDRYVEtaOVZaOVl0QXBKQ2w5N0JldnlnTGE0eW5MU0JsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUllcWtRYXUvZFp1UU95SE1aN1lUcHJnN0N5aUEzYnZpWTRadVphOHVEOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RWY4Q0d1NFVIYWsyNFlnb3FmQnp0b1JMdm5CYW9DeHVMelJyWXAvYldrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRytKQjU2T0JzSjBwVlNIRGYyb0tRRVprRE1namZURithQkVRekxUUncwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMZU82ZDdMbU1QS0M3VTBiS2tXYVZtTnZZRVJTUllpVmlaSEw0dGd4Rk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlExaXc1M1d3YjRIMkU3UThmclpidnViVnlEekpTTnZISlBnWTRQdFovRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5ybzAzaFp0eFZjTE56NXFpMGRiUzlQV21iNkdOUDZ4a0kxLzhER0tVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1ZhOXRUV2ZFU0wrR1U5YnZybFpFT2Rmd1lKR3ZFUG02bUNBVzdFbGpoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRTN1g5M3l3MTNyZmxuNWhPSU9rREUraVV1cTBQZ2c1MDk4ckt6UzNlOXc5VGY4SWVTNzJodjJBNHRNYUFkZG1DRDRla2FBOUNFdDBKTjdEVE01dUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJVbXlUd01LV1QrZHlpS0JBRHlXVERpdmxGS0piRndOaHk3TUk3bGRwVTFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5aDIyN3QyTlRZaXRQTTJtOV95cUhnIiwicGhvbmVJZCI6IjFhN2U5ZWUyLTc4YmQtNDk2My05YTgyLTU3MGU4YTdkNWJkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS3h3UnhxTm5sRFRnQUxkeTlQcWJqS3pLNXM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJzN0ZCdFR6Z0RFNjR6Rm1SaWVMYWgzVUl1cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BlUzY2NElFTUNycnJVR0dEY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlEweFU1bTVyMGFLVXVyMTBxaWpNMnhnOW5ZN0lxaWFtMlhUWEszOElkbjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZpSEE1aTBVWWlDdXZhVWxJMks4ZGl5Mzd6WG9vK0lTUmtPMDdsZnVPcXkwVVdNUkp2c1E4RjNSQ01mQUtOdTZaYWN4dUM2Sk5kdXZ0OW5vM1pXd2d3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEaWU1NE8yRyswenpFNUNBWVcyaGl4UHFDcTBUaUdlQmxKYmxsMldXNFozRHQ4WFRKMlJhYnpxSU9DNmJKSlpzOGpiUUx2a2FlY1ZMR1VIaW5IYndBUT09In0sIm1lIjp7ImlkIjoiOTIzMjA5MDkxOTY2OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+8p++8qO+8oe+8ru+8oe+8rSAg4a2E77yy77yh77yu77ynXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7Dl1xuw5dcbsOXXG7DlyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMDkwOTE5NjY6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVU5NVk9adWE5R2lsTHE5ZEtvb3pOc1lQWjJPeUtvbXB0bDAxeXQvQ0haLyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUyMTAzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUEwQUFGOXEifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
