/* globals = requirejs:false */

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        main: '../app/main',
        router: '../app/router',
        collections: '../app/collections',
        models: '../app/models',
        views: '../app/views',
        templates: '../app/templates'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);
