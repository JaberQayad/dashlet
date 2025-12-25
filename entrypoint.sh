#!/bin/sh

# Check if config exists in the public directory; if not, restore from backup
if [ ! -f public/config.json ]; then
    echo "Config not found, copying default..."
    cp config.default.json public/config.json
fi

# Start the application
exec npx serve . -l 8989
