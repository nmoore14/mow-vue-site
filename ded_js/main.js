let app = new Vue({
	el: '#app',
	data: {
		title: 'Meals on Wheels of Kingsport',
		brandLogo:'./media/images/MOWLogoSmall.svg',
		menuItems: [
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