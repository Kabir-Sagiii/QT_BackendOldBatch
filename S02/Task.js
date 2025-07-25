function getOrders(userId, callback) {
  console.log("Got all orders Information");
  callback(101);
}

function getOrderProductsList(orderId, callback) {
  console.log("Got Products List Information");
  callback(1000001);
}

function getProductsInfo(productId) {
  console.log("Products Information Received");
}

getOrders(99, (orderId) => {
  getOrderProductsList(orderId, (productId) => {
    getProductsInfo(productId);
  });
});
