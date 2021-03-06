#!/bin/bash

# directory that contains the markdowns, downloaded from a git repo
source ./.env

CONTENT_DIR=${DIR:-content}
REPO="https://github.com/SecretFoundation/SecretWebsiteContent.git"

echo "Content directory: $CONTENT_DIR"
echo "Getting markdowns from repo $REPO branch $BRANCH"
echo

if [[ -e "$CONTENT_DIR" ]]; then
        cd $CONTENT_DIR
        git pull origin $BRANCH
        cd .. # weird
else
        git clone $REPO $CONTENT_DIR
        cd $CONTENT_DIR
        git checkout $BRANCH
        cd ..
fi