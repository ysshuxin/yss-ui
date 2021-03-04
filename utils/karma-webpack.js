function karmaWebpack() {
    console.log('Hello, world!')


    console.log(11111)
}

module.exports = {
    // Declare the plugin, so Karma knows that it exists.
    // 'factory' tells Karma that it should call `helloFrameworkFactory`
    // function and use whatever it returns as a service for the DI token
    // `framework:hello`.
    'framework:karmaWebpack': ['factory', karmaWebpack]
};
