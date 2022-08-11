const NavArray = [
  { name: 'Home', href: 'Home', current: false },
  { name: 'Components', href: 'Components', current: false },
  { name: 'Colors', href: 'Colors', current: false },
  { name: 'Test', href: 'Test', current: false },
]

const nav = NavArray

function newPage(page){
for (let i = 0; i<nav.length; i++){
  console.log('which is test: ' + nav[i].current)
  if (nav[i].href === page){
    console.log('found it here: ' +nav[i].current)
    nav[i].current = true
  }

}
}
export {newPage}
export default NavArray
