var specs = [
  './multiple/login_facebook.js',
  './multiple/login.js',
  './multiple/create_mix.js',
  './multiple/search.js'
];

for (var i = 0; i < specs.length; i++) {
  require(specs[i]);
}
