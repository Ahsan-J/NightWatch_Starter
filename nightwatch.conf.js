const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");


module.exports = {
  "src_folders": [
    "test"
  ],
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,                // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444,                         // standard selenium port
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "desiredCapabilities": {            
        "browserName": "chrome",
        "chromeOptions": {
          "args" : ["--no-sandbox"],
          "w3c": false
        },
        "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    }
  }
}