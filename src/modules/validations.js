/* ///////////////////////////////
// Ethereum related validations */

// Valid Ethereum address
export const eth_address_regex = /(0x[a-f0-9]{40})/i

// Valid ENS regex, note that this may be any TLD or subdomain that supports DNSSEC
// valid domain names are ASCII, case-insensitive, and may contain digits, hyphens, and dots, but may not start with a hyphen (ending was illegal but is ok since RFC 2181)
// see https://en.wikipedia.org/wiki/Hostname#Syntax
export const ens_regex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}(?<!-)\.)+(?:[a-zA-Z]{2,})$/i

// Combined regex for Ethereum address or ENS name
export const eth_or_ens_address_regex = new RegExp( `(${ eth_address_regex.source }|${ ens_regex.source })`, 'i' )

/* ///////////////////////////////
// Web2 related validations */

// Taken from https://emailregex.com/
export const email_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

/* ///////////////////////////////
// POAP related validations */

// Valid POAP ID
export const poap_id_regex = /([0-9]+)/i

// Valid POAP edit code
export const poap_edit_code_regex = /([0-9]{6})/i