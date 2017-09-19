# Pattern Lab UI library demo

This is a POC for using Pattern Lab to build a ui library with Twig engine.

Based on [Pattern Lab Standard Edition for Twig](https://github.com/pattern-lab/edition-php-twig-standard#use-composer-to-create-a-project)

For Drupal 8 integration, can be done by including this into a base theme which I will create another repo for POC.

# Structure
When editing our UI lib source code you must put your files and edit them in the `./source/` directory. 
Check the docs in Pattern Lab official docs: [Editing Pattern Lab Source Files](http://patternlab.io/docs/editing-source-files.html)

# Prerequisites
- Node
- Ruby, Bundler

# Installing

Clone this project to local.

# View demo
```
npm install
npm run setup
npm start
```
It should start a server on http://localhost:8080/.

# Watching changes
Run `npm run watch`, it will watch scss and twig file changes and do the compile and generate work.

# Todo
- Add react js component in it
