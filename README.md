# Tutorial gatsby and Contentful

Gatsby [Contentful](https://www.contentful.com) starter for creating a blog. This tutorial was based on a project by [@Khaledgarbaya](https://github.com/contentful-userland/gatsby-contentful-starter).

![The index page of the starter blog](https://github.com/JohannesSanders/tutorial-gatsby-contentful/raw/master/screenshot.jpg "The index page of the starter blog")

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Requirements

To use this project you have to have a Contentful account. If you don't have one yet you can register at [Contentful](https://www.contentful.com/sign-up/). You can use the example project called "Blog".

## Getting started

### Get the source code and install dependencies.

```
$ git clone git@github.com:JohannesSanders/tutorial-gatsby-contentful.git
$ cd gatsby-contentful-starter/
$ npm i
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

![Command line dialog of the npm run setup command](https://github.com/JohannesSanders/tutorial-gatsby-contentful/raw/master/setup.jpg "Command line dialog of the npm run setup command")

This command will ask you for a space ID, and access tokens for the Contentful Management, Preview and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `npm run dev`

Run in the project locally using the [Contentful Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). This can perfect to preview changes before they go into production. By default the blog will be hosted on [http://localhost:8000](http://localhost:8000) (if this is not the case look at your terminal).

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

This will serve the static assets that are located in `./public`. By default the blog will be hosted on [http://localhost:9000](http://localhost:9000) (if this is not the case look at your terminal).