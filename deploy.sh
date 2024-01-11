#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# copy index as 404
## cp index.html 404.html
# if you are deploying to a custom domain
echo 'germantionary.gisse.la' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:coeurofbear/germantionary.git master:gh-pages
cd -