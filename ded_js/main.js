let app = new Vue({
	el: '#app',
	data: {
		title: 'Meals on Wheels of Kingsport',
		brandLogo:'./images/small-mowlogo.svg',
		menuItems: [
			{
				name: 'Home',
				link: 'index.html',
				show: true
			},
			{
				name: 'Volunteer',
				link: 'https://www.youtube.com',
				show: false
			},
			{
				name: 'Receive',
				link: 'https://www.apple.com',
				show: false
			},
			{
				name: 'Donate',
				link: 'https://github.com/',
				show: false
			},
			{
				name: 'Contact Us',
				link: 'https://www.nmoore.dev',
				show: false
			},
			{
				name: 'About Us',
				link: 'https://www.google.com',
				show: false
			},
		]
	},
	methods: {
		setTrue (index) {
			this.menuItems[index].show = true;

			for(i = 0; i < this.menuItems.length; i++) {
				if (i != index)
				{
					this.menuItems[i].show = false;
				}
			}
		}
	},
})