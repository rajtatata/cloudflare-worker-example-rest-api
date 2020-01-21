# Cloudflare Worker Rest Api Example

This project is an example of a REST api with Cloudflare Workers using [cloudflare-worker-rest-api](https://github.com/rajtatata/cloudflare-worker-rest-api) package

## Description

The cloudflare-worker-rest-api package makes it very easy to build REST apis since it is very similar to express framework.

### Project Structure

I have divided the project into controllers, middlewares and routers in order for it to look like something closer to real world applications.</br>
These are then imported on the `index.js` file and connected with our app.

### Installing and Deploying

1. The first thing you should do is go and create a Cloudflare Account if you have not done so
2. Next up we need to setup our machine in order to deploy our build to cloudflare
    - [Click Here](https://developers.cloudflare.com/workers/quickstart/) if you want to follow official setup docs
3. Start by installing wrangler globaly on your system

```
npm i @cloudflare/wrangler -g
```
4. After that, make sure to configure the global user for wrangler
    - Follow on-screen instructions to get your api key
```
wrangler config
Enter API token:
superlongapitoken
```
5. Now you are ready to clone this project on our machine
6. After cloning the project, make sure to edit `wrangler.toml` file
    - fill `account_id` you your account id
    - fill `zone_id` you your zone id
7. Don't forget to install necessary project packages
```
npm install
```
8. Publish the project with wrangler
    - it will install packages, build, and the deploy to cloudflare
```
npm run publish
```