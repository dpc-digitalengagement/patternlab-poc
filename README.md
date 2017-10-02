# Pattern Lab UI library demo

This is a POC for using Pattern Lab to build a UI library with Twig engine.

Based on [Pattern Lab Standard Edition for Twig](https://github.com/pattern-lab/edition-php-twig-standard#use-composer-to-create-a-project).

For Drupal 8 integration, can be done by including this into a base theme which I will create another repo for POC. But there are some good example in section [Drupal integration](#drupal-integration).

# Structure
When editing our UI lib source code you must put your files and edit them in the `./source/` directory. 
Check the docs in Pattern Lab official docs: [Editing Pattern Lab Source Files](http://patternlab.io/docs/editing-source-files.html)

`source/scss` is the place for base sass settings which are not belong to a specific component.
`_patterns` is the place for components.

# Prerequisites
- Node
- Composer
- Yarn (optional)

# Installing

Clone this project to local.
```
npm install
npm run setup
npm run build
```
or
```
yarn install
yarn setup
yarn build
```

# View demo
```
npm start
```
or
```

yarn start
```

It should start a server, go to http://localhost:8080/ check the Pattern library.

# Watching changes
Run `npm run watch` or `yarn watch`, it will watch scss and twig file changes and do the compile and generate work.

# Todo
- Add react js component in it

# Drupal integration
Here are some ideas and demonstrations on how to use Pattern Lab in Drupal theme.
- [phase2/pattern-lab-starter](https://github.com/phase2/pattern-lab-starter)
- [backlineint/real-world](https://github.com/backlineint/real-world)
