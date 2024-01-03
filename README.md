# Prepare and deploy poetry based project action

## Workflow steps

Composite action designed to help and simplify deployment and simplify configuration management:

**Set repository name** without organization name
**Configure GitHub Credentials** required to iteract with GitHub API
**Configuration** based on environment type (TEST/PROD)
**AWS authentification (chain)** authentification in AWS accound
**Checkout source code** (self-explained)
**Setup Python environment** (self-explained) with defined Python version
**Installing poetry** (self-explained)
**Cache operations** with Poetry stuff
**Install Poetry dependencies**
**Cache operations** with Ansible role stuff
**Install Ansible dependencies**
**Deploy** using Ansible command

## Future improvements

TBD

## How to use

### Example:

```yml
- name: Deploy
  uses: bricklanetech/github.action.deploy@latest
  with:
    awsRegion: ${{ env.AWS_REGION }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
    pythonVersion: ${{ env.PYTHON_VERSION }}
```

## Inputs

| Parameter Name | Required | Default   | Description                                |
| -------------- | -------- | --------- | ------------------------------------------ |
| awsRegion      | Yes      | eu-west-1 | The AWS region to use                      |
| githubToken    | Yes      | ''        | The GitHub token to use for authentication |
| pythonVersion  | Yes      | 3.9       | The Python version to use                  |
