# POAP Data validations and sanetisers

This [npm package](https://www.npmjs.com/package/@poap/sane-data) contains a number of regex-based validations as well as string sanetisers that are common in POAP-related dApps.

You can view the complete list of included elements and their documentation here here:

- [View all regex validations](https://github.com/poap-xyz/sane-data/tree/main/src/modules/validations.js)
- [View all sanitisation functions](https://github.com/poap-xyz/sane-data/tree/main/src/modules/sanitisers.js)

## Usage

To use this package, install it by running `npm i -S @poap/sane-data` and using either the regexes or the sanetiser functions.

Example sanetiser usage:

```js
// Import the sanetisers you need
import { sanetise_eth_address, sanetise_ens_address, sanetise_eth_or_ens_address, sanetise_poap_id, sanetise_poap_edit_code, sanetise_email, sanetise_string } from '@poap/sane-data'

// Use the sanetisers in your code
function send_poap( wallet_or_ens, drop_id, email ){

    try {

        // Sanetise the data
        wallet_or_ens = sanetise_eth_or_ens_address( wallet_or_ens )
        drop_id = sanetise_poap_id( drop_id )

        // Sanetisers throw by default, if you want to continue even when the sanetiser fails, you can disable throwing like so:
        email = sanetise_email( email, false )

        // Then do whatever you want to do
        ...

        return { success: true }

    } catch( e ) {

        // The thrown error can be due to invalid values
        console.error( `Error doing things:`, e )
        return { error: e.message }

    }

}

```

Example regex usage:

```js

// Import the regexes you need
import { eth_address_regex, ens_regex, eth_or_ens_address_regex, email_regex, poap_id_regex, poap_edit_code_regex } from '@poap/sane-data'

// Use the regexes
const user_address = `0x0000000000000000000000000000000000000000`
if( user_address.match( eth_address_regex ) ) return 'You qualify for the airdrop'

```