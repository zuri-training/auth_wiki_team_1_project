#!/bin/shell

python manage.py migrate  --no-input

gunicorn core.asgi:application --bind 0.0.0.0:8000 -w 2 -k uvicorn.workers.UvicornWorker
