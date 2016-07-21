# Orange PI Monitor

# [Summary](#Summary-0)
Monitoring of Orange PI based on NodeJS and [ThingSpeak.com](https://thingspeak.com)

# [Features](#Features-1)
* Periodic CPU temperature reading
* Saving to a local database
* Send to a remote service (ThingSpeak.com)

# [Usage](#Usage-2)
* Install [nvm](https://github.com/creationix/nvm)
* Install [Git](https://git-scm.com) (optional)
* Clone repository or download zip archive
```bash
git clone https://github.com/golyakov/opimonitor.git
```
* Build app
```bash
cd opimonitor && npm init
```
* Connected to ThingSpeak.com
  * Register in ThingSpeak.com
  * Create channel
  * Copy channel api key

# [Example](#Exemple-3)
* Manual app launch
```bash
THINGSPEAK_API_KEY=<Your channel api key> npm start
```
* Run the app as a service
  * Copy opimonitor.service
  ```bash
  sudo cp deploy/opimonitor.service /etc/systemd/system/opimonitor.service
  ```
  * Insert node version and channel api key in file /etc/systemd/system/opimonitor.service
  * Init and start service
  ```bash
  sudo systemctl enable opimonitor.service
  sudo systemctl start opimonitor.service
  ```

# [License](#License-6)
[MIT](https://github.com/golyakov/opimonitor/blob/master/LICENSE)
