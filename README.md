# grunt-viewbox-data

> Extract viewBox data from svg sprites built with [grunt-svgstore](https://github.com/FWeinb/grunt-svgstore)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-viewbox-data --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-viewbox-data');
```

## The "viewbox_data" task

### Overview
In your project's Gruntfile, add a section named `viewbox_data` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  viewbox_data: {
    your_target: {
      src: ['lib/svg/svgstore-ui.svg', 'lib/svg/svgstore-social.svg'],
      dest: 'dist/viewbox.json'
    },
  },
});
```
