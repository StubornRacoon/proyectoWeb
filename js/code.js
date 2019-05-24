

new Vue({
    el: '#app',
    data: {
        n:0,
        recipe: [{step: "some text", image: "https://static-news.moneycontrol.com/static-mcnews/2018/08/Business-Travel-1.jpg"}, {step: "some text1", image: "http://blog.edx.org/wp-content/uploads/2016/03/Business-Management.jpg"}, {step: "https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1512148994695.png", image: "https://static-news.moneycontrol.com/static-mcnews/2018/08/Business-Travel-1.jpg"}]
      },
      methods: {
        previousStep: function(){
          if(n===0){

          }else{
              Vue.n=n-1;
          }

        },
        nextStep: function(){
          if(n===(recipe.lenght -1)){

          }else{
            Vue.n = n+1;
          }

        }
      },
  });
