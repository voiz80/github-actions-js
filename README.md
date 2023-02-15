# github-actions-js
Setup CI/CD with Github Actions JS Resources

## Continuous Integration - Merge Code In
ci.yml need pull request event to trigger a workflow 
```
git checkout -b <branchname>
git add .
git commit -m "break it"
git push origin <branchname>
# Then auto triggered workflow
```
## Continuous Deployment - Release Code Out