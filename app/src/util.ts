// util.ts
/**
 * Utility functions
 * 
 * authors: Michael K.
 * @packageDocumentation
 */


namespace Util {

    /**
     * Stateless object mutation. Returns new object with updated properties
     * @param original Original object
     * @param updates Object containing keys with corresponding values to update
     */
    export function update(original: any, updates: any) {
        let output: any = { ...original }

        for (let key in updates) {
            output[key] = update[key]
        }

        return output
    }
}


export default Util