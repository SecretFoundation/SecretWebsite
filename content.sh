#!/bin/bash

# directory that contains the markdowns, downloaded from a git repo
CONTENT_DIR=${DIR:-content}
REPO="git@github.com:SecretFoundation/SecretWebsiteContent.git"

echo "Content directory: $CONTENT_DIR"
echo "Getting markdowns from repo $REPO"
echo

if [[ -e "$CONTENT_DIR" ]]; then
        cd $CONTENT_DIR
        git pull origin master
        cd .. # weird
else
        git clone $REPO $CONTENT_DIR
fi