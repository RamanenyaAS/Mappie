#!/bin/sh
# husky.sh - Husky's helper script

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

cd "$(dirname "$0")/../.."

if [ -f package.json ]; then
  if command_exists node; then
    node_path=$(command -v node)
    node "$PWD/node_modules/husky/lib/runner/bin.js" "$@"
  else
    echo "Node.js is not installed or not found in PATH"
    exit 1
  fi
else
  echo "package.json not found, husky hooks may not work"
  exit 1
fi