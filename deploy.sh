#!/bin/bash

trap 'exit 1' ERR

cd "$(dirname "$0")"
git stash
git pull
docker build -t portfolio:latest -f Dockerfile .
docker stop portfolio || true
docker run -d --restart unless-stopped -p 3000:3000 --name portfolio portfolio:latest
docker system prune -af

trap - ERR
