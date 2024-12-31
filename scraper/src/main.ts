import * as console from "node:console";
import * as fs from 'node:fs/promises';
import {HTListingAggregator} from "./HTListingAggregator";
import {IEListingAggregator} from "./IEListingAggregator";
import {NDTVListingAggregator} from "./NDTVListingAggregator";

async function main() {
    const indianExpressListing = await new IEListingAggregator().getListings();
    const htListing = await new HTListingAggregator().getListings();
    const ndtvListing = await new NDTVListingAggregator().getListings();
    await fs.writeFile('../viewer/src/data.json', JSON.stringify([
        ...indianExpressListing,
        ...htListing,
        ...ndtvListing
    ]));
}

main().then().catch(e => console.log(e))
