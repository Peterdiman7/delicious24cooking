#!/bin/bash

PROJECT_ROOT=/home/devalex/delicious24cooking.com/delicious24cooking
LOG_FILE="$HOME/delicious24-backend.log"

# Already running?
if pgrep -f "$PROJECT_ROOT/src/services/server.js" > /dev/null; then
  echo "Backend already running, exiting."
  exit 0
fi

cd "$PROJECT_ROOT" || exit

while true; do
  echo "[$(date)] Starting Delicious24Cooking backend..." >> "$LOG_FILE" 2>&1
  /usr/bin/node "$PROJECT_ROOT/src/services/server.js" >> "$LOG_FILE" 2>&1
  echo "[$(date)] Backend crashed or stopped. Restarting in 5 seconds..." >> "$LOG_FILE" 2>&1
  sleep 5
done
