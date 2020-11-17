let openBtn = document.getElementById('openBtn')
let closeBtn = document.getElementById('closeBtn')
let links = document.getElementById('links')
	closeBtn.style.visibility = 'hidden'
let sideNav = document.getElementById('sidenav')
openBtn.addEventListener('click',function(){
	sideNav.style.visibility = 'visible'
	sideNav.style.width = '100%'
	sideNav.style.transition = `.6s`
	sideNav.style.height = '101vh'
	closeBtn.style.visibility = 'visible'
	openBtn.style.visibility = 'hidden'
	links.style.opacity = `1`
})
closeBtn.addEventListener('click',function(){
	sideNav.style.width = '0'
	sideNav.style.visibility = 'hidden'
	sideNav.style.transition = `.6s`
	closeBtn.style.visibility = 'hidden'
	openBtn.style.visibility = 'visible'
	links.style.opacity = `0`
})

let l1 = document.getElementById('l1')
let l2 = document.getElementById('l2')
let l3 = document.getElementById('l3')
let l4 = document.getElementById('l4')
let login = document.getElementById('login')
l1.addEventListener('click',function(){
	sideNav.style.width = '0'
	sideNav.style.visibility = 'hidden'
	sideNav.style.transition = `.6s`
	closeBtn.style.visibility = 'hidden'
	openBtn.style.visibility = 'visible'
	links.style.opacity = `0`
})
l2.addEventListener('click',function(){
	sideNav.style.width = '0'
	sideNav.style.visibility = 'hidden'
	sideNav.style.transition = `.6s`
	closeBtn.style.visibility = 'hidden'
	openBtn.style.visibility = 'visible'
	links.style.opacity = `0`
})
l3.addEventListener('click',function(){
	sideNav.style.width = '0'
	sideNav.style.visibility = 'hidden'
	sideNav.style.transition = `.6s`
	closeBtn.style.visibility = 'hidden'
	openBtn.style.visibility = 'visible'
	links.style.opacity = `0`
})
l4.addEventListener('click',function(){
	sideNav.style.width = '0'
	sideNav.style.visibility = 'hidden'
	sideNav.style.transition = `.6s`
	closeBtn.style.visibility = 'hidden'
	openBtn.style.visibility = 'visible'
	links.style.opacity = `0`
})
login.addEventListener('click',function(){
	sideNav.style.width = '0'
	sideNav.style.visibility = 'hidden'
	sideNav.style.transition = `.6s`
	closeBtn.style.visibility = 'hidden'
	openBtn.style.visibility = 'visible'
	links.style.opacity = `0`
})