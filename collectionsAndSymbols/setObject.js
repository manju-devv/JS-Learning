// set - a collection of unique values
const mySet = new Set([1, 2, 3, 4, 5,1,2]);
console.log(mySet);




const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet = new Set(wishListArr)

wishListSet.add('diary')
// wishListSet.delete('shoes')
console.log(wishListSet.has('shoes'))
// wishListSet.clear()

wishListSet.forEach((listItem) => console.log(listItem))





/* Challenge:
    1. Refactor this code to use a Set instead  
       of an array so no tags can be duplicated!
*/

const postTags = new Set()

function addTag(newTag) {
    postTags.add(newTag)
}

addTag('history')
addTag('romans')
addTag('sociology')
addTag('history')
addTag('history')

postTags.forEach((tag) => console.log(tag))