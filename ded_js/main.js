let app = new Vue({
	el: '#app',
	data: {
		title: 'Meals on Wheels of Kingsport',
		brandLogo:'./images/small-mowlogo.svg',
		menuItems: [
			{
				name: 'Home',
				link: 'index.html'
			},
			{
				name: 'Volunteer',
				link: 'https://www.youtube.com'
			},
			{
				name: 'Receive',
				link: 'https://www.apple.com'
			},
			{
				name: 'Donate',
				link: 'https://github.com/'
			},
			{
				name: 'Contact Us',
				link: 'https://www.nmoore.dev'
			},
			{
				name: 'About Us',
				link: 'https://www.google.com'
			},
		]
	}
})