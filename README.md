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
- name: Configuration for Production Environment
  shell: bash -e {0}
  if: ${{ github.ref == 'refs/heads/production' }}
  run: |
    echo "DEPLOYMENT_ENV=production" >> $GITHUB_ENV
    echo "AWS_OIDC_ROLE=${{ secrets.AWS_OIDC_ROLE_ENG_PRODUCTION }}" >> $GITHUB_ENV

- name: Configuration for Testing Environment
  shell: bash -e {0}
  if: ${{ github.ref == 'refs/heads/test' }}
  run: |
    echo "DEPLOYMENT_ENV=test" >> $GITHUB_ENV
    echo "AWS_OIDC_ROLE=${{ secrets.AWS_OIDC_ROLE_ENG_TEST }}" >> $GITHUB_ENV

- name: Deploy
  uses: bricklanetech/github.action.deploy@latest
  with:
    awsAuthRole: ${{ secrets.AWS_OIDC_ROLE_AUTH_ENG }}
    awsEnvRole: ${{ env.AWS_OIDC_ROLE }}
    awsEnvName: ${{ env.DEPLOYMENT_ENV }}
    awsRegion: ${{ env.AWS_REGION }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
    pythonVersion: ${{ env.PYTHON_VERSION }}
```

## Inputs

| Parameter Name | Required | Default   | Description                                |
| -------------- | -------- | --------- | ------------------------------------------ |
| awsAuthRole    | Yes      | ''        | The AWS role to use for authentication     |
| awsEnvRole     | Yes      | ''        | The AWS role to use for deployment         |
| awsEnvName     | Yes      | ''        | The AWS environment name                   |
| awsRegion      | Yes      | eu-west-1 | The AWS region to use                      |
| githubToken    | Yes      | ''        | The GitHub token to use for authentication |
| pythonVersion  | Yes      | 3.9       | The Python version to use                  |
