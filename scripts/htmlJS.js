// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishies = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish-article">'

    // Create HTNL representations of each fish here
    for (const fish of fishies) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="box">
            <img  class="detail" src="${fish.image}" />
            <p class="detail">Species: ${fish.species}</p>
            <p class="detail">Length: ${fish.length} polygons</p>
            <p class="detail">Name: ${fish.name}</p>
            <p class="detail">Diet: ${fish.diet}</p>
            <p class="detail">Location Collected: ${fish.location}</p>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}