setInterval(function() {

Game.shimmers.forEach(function(shimmer) {
if (shimmer.type == "golden") { shimmer.pop() }
if (shimmer.type == "reindeer") { shimmer.pop() }
})

}, 500);