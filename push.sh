rm -R media_root_dist
cp -avR media_root/ media_root_dist
cp -av db.sqlite3 db.sqlite3_dist
git add .
git commit -m "dev fast push"
git push
