sudo git stash
sudo git pull
sudo cp -R media_root_dist/ media_root/
sudo cp db.sqlite3_dist db.sqlite3
sudo chmod -R 777 *
sudo npm run build
pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
pipenv run python manage.py collectstatic