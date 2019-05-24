

new Vue({
    el: '#app',
    data: {
        n:0,
        recipe: [{step: "some text", image: "some url"}, {step: "some text1", image: "some url1"}, {step: "some text2", image: "some url3"}]
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