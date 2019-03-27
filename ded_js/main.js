let app = new Vue({
  el: "#app",
  data: {
    title: "Meals on Wheels of Kingsport",
    brandLogo: "./images/small-mowlogo.svg",
    menuItems: [
      {
        name: "Home",
        link: "index.html",
        show: true
      },
      {
        name: "Volunteer",
        link: "https://www.youtube.com",
        show: false
      },
      {
        name: "Receive",
        link: "https://www.apple.com",
        show: false
      },
      {
        name: "Donate",
        link: "https://github.com/",
        show: false
      },
      {
        name: "Contact Us",
        link: "https://www.nmoore.dev",
        show: false
      },
      {
        name: "About Us",
        link: "https://www.google.com",
        show: false
      }
    ],
    display: [
      {
        path: "./images/Beans.jpg",
        alt: "Picture of beans"
      },
      {
        path: "./images/Prep.jpg",
        alt: "People prepping food"
      },
      {
        path: "./images/Food_Final.jpg",
        alt: "Table full of food"
      },
      {
        path: "./images/Delivery.jpg",
        alt: "Man delivering food"
      }
    ],
    imgNum: 0,
		imgShowing: "./images/Beans.jpg",
		imgAlt: "Picture of beans"
  },
  methods: {
    setTrue(index) {
      this.menuItems[index].show = true;

      for (i = 0; i < this.menuItems.length; i++) {
        if (i != index) {
          this.menuItems[i].show = false;
        }
      }
    },
    changeImg() {
      if (this.imgNum == 3) {
        this.imgNum = 0;
      } else {
        this.imgNum++;
      }

      this.imgShowing = this.display[this.imgNum].path;
      this.imgAlt = this.display[this.imgNum].alt;
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.changeImg();
      }, 5000);
    });
  }
});