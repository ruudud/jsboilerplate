var config = module.exports;

config['Browser tests'] = {
    libs: ['lib/*.js'],
    sources: ['src/projectname.js', 'src/**/*.js'],
    tests: ['test/*_test.js'],
    environment: 'browser'
};
