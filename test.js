window.onload = function(){
	Main();
};
function Main()
{
	var ary = [1, 2, 3, 4, 5];
	var nowSort = d3.descending; // d3.ascending
	d3.select("body").insert("ul", ":first-child");
	transform();

	function transform()
	{
	  reverse();
	  d3.selectAll("li").enter().remove();
	  nodes = d3.select("body").select("ul").selectAll("li");
	  nodes
		.data(ary)
		.enter()
		.append("li")
		.on("click", function(d,i) { transform(); })
		.text(function(d) {return d;});
	  nodes
		.data(ary)
		.exit().remove();
	  nodes.text(function(d) {return d;});
	}
	function reverse()
	{
	  if (nowSort == d3.ascending) {
		ary.sort(d3.descending);
		nowSort = d3.descending;
	  } else {
		ary.sort(d3.ascending);
		nowSort = d3.ascending;
	  }
	}
}
