const showdown = require('showdown');
const Prism = require('prismjs');
function markdownLoader(val) {
    let converter = new showdown.Converter()
    let html = converter.makeHtml(val)
    html=html.replace(/(?<=[\n\r])(.*)bh:::(.*)(?=[\n\r])/gi,'<bh-card>').replace(/(?<=[\n\r])(.*):::bh(.*)(?=[\n\r])/gi,'</bh-card>')
    html = html.replace(/(?<=<pre><code[^>]*?>)[\s\S]*?(?=<\/code><\/pre>)/gi, v => {
        return Prism.highlight(v, Prism.languages.javascript,'javascript');
    });
    return (
        `<template><div class="markdown" >${html}</div></template>`
    );
}
module.exports = markdownLoader;
