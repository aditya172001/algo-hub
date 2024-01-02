#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.5.0/bin

cd /home/ubuntu/algo-hub
sudo git pull origin main
pm2 stop algo-hub-server
npm install
turbo run build:server
pm2 start npm --name algo-hub-server -- run start:server