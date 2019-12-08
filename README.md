# Concise E2E 

### Running end-to-end tests

NOTE: Node.js (v12) is needed to run below commands.

1. To install all needed dependencies run below command in main folder
```
npm install
```

2. Before running the tests run following command to get latest chromedriver:
```
npm run pre-test
```
3. To run tests execute:
```
npm run test
```

### In case of some Protractor fail: 
Above setup uses locally installed protractor, in case of some failure you can try to run protractor globally. To do so, execute:
```
npm install -g protractor
```
To install protractor globally.

Then execute:
```
webdriver-manager update
```
To download latest chromedriver binaries.

And to run tests with globally installed protractor run following command in main folder:
```
protractor protractor.conf.js
```
### Test results:
Test results report will be located in 'testresults' folder.