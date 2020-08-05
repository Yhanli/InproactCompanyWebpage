cp -avR media_root_dist/ media_root/
cp -av db.sqlite3_dist db.sqlite3
pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
cp -avR media_root_dist/ media_root/
cp -av db.sqlite3_dist db.sqlite3