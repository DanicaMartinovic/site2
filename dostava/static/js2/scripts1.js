const currentLocations = location.href
const menuItems = document.querySelectorAll('a')
const menuLength = menuItems.length
for(let i = 0; i<menuLength; i++ ){
    if(menuItems[i].href === currentLocations){
        menuItems[i].className ='active'
}
}