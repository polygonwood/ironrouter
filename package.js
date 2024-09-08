Package.describe({
  name: 'polygonwood:router',
  summary: 'Routing specifically designed for Meteor',
  version: '2.0.0',
  git: 'https://github.com/iron-meteor/iron-router'
});

Npm.depends({
  'body-parser': '1.12.4' // parse request bodies
});

Package.onUse(function (api) {
  api.versionsFrom('3.0.2');
  // meteor dependencies
  api.use('underscore');
  api.use('webapp', 'server'); // used only on server side
  api.use('tracker', 'client'); // used only on client side
  api.use('ui');
  api.use('templating');

  // for cloning
  api.use('ejson');

  // for dynamic scoping with environment variables
  api.use('meteor');

  // main namespace and utils
  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  // ui layout
  api.use('polygonwood:layout@2.0.0');

  // connect like middleware stack for client/server
  api.use('polygonwood:middleware-stack@3.0.0');

  // client and server side url utilities and compiling
  api.use('iron:url@1.1.0');

  // for reactive urls and pushState in the browser
  api.use('iron:location@1.0.11');

  // for RouteController which inherits from this
  api.use('polygonwood:controller@2.0.0');

  api.addFiles('lib/current_options.js');
  api.addFiles('lib/http_methods.js');
  api.addFiles('lib/route_controller.js');
  api.addFiles('lib/route_controller_server.js', 'server');
  api.addFiles('lib/route_controller_client.js', 'client');
  api.addFiles('lib/route.js');
  api.addFiles('lib/router.js');
  api.addFiles('lib/hooks.js');
  api.addFiles('lib/helpers.js');
  api.addFiles('lib/router_client.js', 'client');
  api.addFiles('lib/body_parser_server.js', 'server');
  api.addFiles('lib/router_server.js', 'server');
  api.addFiles('lib/plugins.js');
  api.addFiles('lib/global_router.js'); // client and server
  api.addFiles('lib/templates.html');

  // symbol exports
  api.export('Router');
  api.export('RouteController');
});

Package.onTest(function (api) {
  api.use('polygonwood:router');
  api.use('tinytest');
  api.use('test-helpers');

  api.addFiles('test/helpers.js');
  api.addFiles('test/route_test.js');
  api.addFiles('test/router_test.js');
  api.addFiles('test/route_controller_test.js');
});