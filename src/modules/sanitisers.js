/**
 * General purpose sanitiser
 * @param {String} input - Input to be sanetised
 * @param {String} type - String that describes the input type, used for error messaging
 * @param {RegExp} regex - Regular expression to match the input against
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation
 * @returns a lowercased and trimmed string version of the input
 */
const sanetize = ( input, type, regex, throw_on_fail = true ) => {

    // Check for validation match
    if( !`${ input }`.match( regex ) && throw_on_fail ) throw new Error( `${ type } input ${ input } is not valid` )
    
    // If string is invalid, but throwing is disabled, log a warning
    if( !`${ input }`.match( regex ) && !throw_on_fail ) console.warn( `${ type } input ${ input } is not valid` )

    // Return normalised string version of input
    return `${ input?.toLowerCase().trim() }`

}

/* /////////////////////////////////
// Ethereum related sanitisations */
// ///////////////////////////////*/

/**
 * Validate and sanetise an Ethereum address. Throws on failed validation by default. NOTE: this check does not use checksummed addresses but a naive regex. If you require checksummed addresses, use the checksum function of your favored library.
 * @param {String} input - Input to be sanetised
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation, when set to false, it will log a warning instead of throwing
 * @returns {String} Validated, lowercased, trimmed string version of the input
 */
import { eth_address_regex } from './validations'
export const sanetise_eth_address = ( input, throw_on_fail = true ) => sanetize(
    input,
    'Ethereum address',
    eth_address_regex,
    throw_on_fail
)

/**
 * Validate and sanetise an Ethereum Name Service address. Throws on failed validation by default. NOTE: this allowd all DNSSEC enabled domain names
 * @param {String} input - Input to be sanetised
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation, when set to false, it will log a warning instead of throwing
 * @returns {String} Validated, lowercased, trimmed string version of the input
 */
import { ens_regex } from './validations'
export const sanetise_ens_address = ( input, throw_on_fail = true ) => sanetize(
    input,
    'Ethereum ENS',
    ens_regex,
    throw_on_fail
)

/**
 * Validate and sanetise an Ethereum address OR an Ethereum Name Service address. Throws on failed validation by default. NOTE: this check does not use checksummed addresses but a naive regex. If you require checksummed addresses, use the checksum function of your favored library. The ENS addresses allow all DNSSEC enabled domain names
 * @param {String} input - Input to be sanetised
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation, when set to false, it will log a warning instead of throwing
 * @returns {String} Validated, lowercased, trimmed string version of the input
 */
import { eth_or_ens_address_regex } from './validations'
export const sanetise_eth_or_ens_address = ( input, throw_on_fail = true ) => sanetize(
    input,
    'Ethereum address or ENS',
    eth_or_ens_address_regex,
    throw_on_fail
)

/* ///////////////////////////////
// POAP related sanitisations
// /////////////////////////////*/

/**
 * Validate and sanetise a POAP drop ID. Throws on failed validation by default. NOTE: drop IDs are numbers, but this function returns a string. If you rely on types, be sure to cast the return value to a number if you need that.
 * @param {String} input - Input to be sanetised
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation, when set to false, it will log a warning instead of throwing
 * @returns {String} Validated, lowercased, trimmed string version of the input
 */
import { poap_id_regex } from './validations'
export const sanetise_poap_id = ( input, throw_on_fail = true ) => sanetize(
    input,
    'POAP ID',
    poap_id_regex,
    throw_on_fail
)

/**
 * Validate and sanetise a POAP drop ID. Throws on failed validation by default. NOTE: drop IDs are numbers, but this function returns a string. If you rely on types, be sure to cast the return value to a number if you need that.
 * @param {String} input - Input to be sanetised
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation, when set to false, it will log a warning instead of throwing
 * @returns {String} Validated, lowercased, trimmed string version of the input
 */
import { poap_edit_code_regex } from './validations'
export const sanetise_poap_edit_code = ( input, throw_on_fail = true ) => sanetize(
    input,
    'POAP edit code',
    poap_edit_code_regex,
    throw_on_fail
)

/* ///////////////////////////////
// Web2 related sanitisations
// /////////////////////////////*/

/**
 * Validate and sanetise an email address. Throws on failed validation by default.
 * @param {String} input - Input to be sanetised
 * @param {Boolean} throw_on_fail - Whether to throw an error if the input fails validation, when set to false, it will log a warning instead of throwing
 * @returns {String} Validated, lowercased, trimmed string version of the input
 */
import { email_regex } from './validations'
export const sanetise_email = ( input, throw_on_fail = true ) => sanetize(
    input,
    'email',
    email_regex,
    throw_on_fail
)

/* ///////////////////////////////
// Generic sanitisations
// /////////////////////////////*/
/**
 * 
 * @param {String} input - Input string
 * @returns {String} Lowercased and trimmed version of the input
 */
export const sanetise_string = input => `${ input }`.toLocaleLowerCase().trim()