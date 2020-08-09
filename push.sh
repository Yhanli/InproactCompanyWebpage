rm -R media_root_dist
cp -R media_root/ media_root_dist
cp db.sqlite3 db.sqlite3_dist
git add .
git commit -m "dev fast push"
git push
