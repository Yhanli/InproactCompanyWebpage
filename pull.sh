cp -avR media_root_dist/ media_root/
cp -av db.sqlite3_dist db.sqlite3
npm run build
pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
pipenv run python manage.py collectstatic
cp -avR media_root_dist/ media_root/
cp -av db.sqlite3_dist db.sqlite3