#!/usr/bin/env bash
sudo git stash
sudo git reset --hard origin/master
sudo git pull
sudo chmod -R 777 *
sudo npm run build
pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
pipenv run python manage.py collectstatic

sudo supervisorctl stop gunicornInpro
sudo supervisorctl start gunicornInpro

