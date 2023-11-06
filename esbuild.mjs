import * as esbuild from 'esbuild'

// Useful links to know what is going on here
// https://webpack.js.org/guides/package-exports/#combining-patterns
// https://nodejs.org/api/packages.html#dual-commonjses-module-packages

// Set the LTS version to support
// see https://github.com/nodejs/release#release-schedule
const node_lts_version = 20
const oldest_node_to_support = '6.10'

// Set browser support
// see: https://esbuild.github.io/api/#target
const browsers_to_support = [ 'esnext' ]
// const browsers_to_support = [ 'chrome58', 'firefox57', 'safari11', 'edge16' ]

// Load the package.json
import fs from 'fs'
const pck = JSON.parse( fs.readFileSync( 'package.json', 'utf8' ) )

// Verbose build process
const start_message = `
=========================================
Building ${ pck.name } v${ pck.version }
=========================================
Browser: ${ pck.browser ? 'yes' : 'no' }
Node ESM: ${ pck.exports.node.import ? 'yes' : 'no' }
Node CJS: ${ pck.exports.node.require ? 'yes' : 'no' }
Legacy Node CJS: ${ pck.module ? 'yes' : 'no' }
`
console.log( start_message )

// 🌎 Browser bundled version
// in many cases this can just be the uncompiled source, but if you set specific browser targets it will differ
if( pck.browser ) {
    console.log( `Building browser bundle for ${ browsers_to_support.join( ', ' ) }` )
    await esbuild.build( {
        entryPoints: [ 'src/index.js' ],
        bundle: true,
        minify: true,
        sourcemap: true,
        target: browsers_to_support,
        outfile: 'dist/browser/index.js',
    } )
}

// ESM node bundled version
// relevant for node.js environments without a bundler
if( pck.exports.node.import ) {
    console.log( `Building node ESM bundle for v${ node_lts_version }` )
    await esbuild.build( {
        entryPoints: [ 'src/index.js' ],
        bundle: true,
        minify: true,
        sourcemap: true,
        target: [ `node${ node_lts_version }` ],
        format: 'esm',
        outfile: 'dist/node-esm/index.js',
    } )
}

// CSJ node bundled version
// relevant for node.js environments without a bundler
if( pck.exports.node.require ) { 
    console.log( `Building node CJS bundle ${ node_lts_version }` )
    await esbuild.build( {
        entryPoints: [ 'src/index.js' ],
        bundle: true,
        minify: true,
        sourcemap: true,
        target: [ `node${ node_lts_version }` ],
        format: 'cjs',
        outfile: 'dist/node-cjs/index.js',
    } )
}

// Build legacy node CJS module
// relevant for older node.js versions that do not support ESM
if( pck.module ) {
    console.log( `Building legacy node CJS bundle for ${ oldest_node_to_support }` )
    await esbuild.build( {
        entryPoints: [ 'src/index.js' ],
        bundle: true,
        minify: true,
        sourcemap: true,
        target: [ `node${ oldest_node_to_support }` ],
        format: 'cjs',
        outfile: 'dist/legacy-node/index.js',
    } )
}

console.log( `\nBuild process completed` )