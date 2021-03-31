require.config({
  paths:{
    cdn4jquery: "cdnlink"
  }
})


define(["credit2","product2", "cdn4jquery"], function(credits,products) {

    console.log("Function : purchaseProduct");
  
    return {
        purchaseProduct: function() {
  
                var credit = credits.getCredits();
                if(credit > 0){
                  products.reserveProduct();
                  return true;
        };
        return false;
      }
    }
  });