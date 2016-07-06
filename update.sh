#!/bin/bash
# commits to GitHub to give new data

npm install

npm run parking

git config --global push.default simple
git config user.name "oSoc bot"
git config user.email "hello+bot@haroen.me"
git commit -am "update data"
git push https://${GH_OAUTH_TOKEN}@github.com/oSoc16/mobylink HEAD:gh-pages > /dev/null 2>&1
