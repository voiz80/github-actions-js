# github-actions-js
Setup CI/CD with Github Actions Resources and deployed on Firebase

## Continuous Integration - Merge Code In
ci.yml need pull request event to trigger a workflow 
```
git checkout -b <branchname>
git add .
git commit -m "break it" # or something else for msg
git push origin <branchname>
# Then auto triggered workflow
```
## Continuous Deployment - Release Code Out
deploy.yml need push event on main branch to trigger a workflow

I Use GitHub Action for Firebase and deployed on Firebase
```
https://github-actions-js.web.app/
```