const NavArray = [
  { name: 'Home', href: 'home', current: false },
  { name: 'Components', href: 'components', current: false },
  { name: 'Colors', href: 'colors', current: false },
  { name: 'Test', href: 'test', current: false },
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
