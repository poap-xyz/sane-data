// Check if we are running on a local dev server
export const localhost = typeof location !== 'undefined' && location.href.includes( 'localhost' )

// Check if we are running in debug mode
export const debug_mode = typeof location !== 'undefined' && location.href.includes( 'debug=true' )

// Check if we are running in development mode
export const dev = process.env.NODE_ENV === 'development' || process.env.verbose == 'true' || debug_mode || localhost

/**
 * * A logging function that logs while developing, but is silent in production
 * @param {...*} messages - The messages to log. Can be any type, and any number of arguments. 
 * @returns {Void} does not return anything, merely logs to the console
 */
export const log = ( ...messages ) => {
    if( dev ) console.log( 'Development log: ', ...messages )
}