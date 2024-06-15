//U20452568

document.addEventListener("DOMContentLoaded", function() {
    const data = [1, 2, 3, 4, 5]; // Example data points

    const container = d3.select("body")
                        .append("div")
                        .attr("class", "container");

    container.selectAll(".data-point")
             .data(data)
             .enter()
             .append("div")
             .attr("class", "data-point")
             .on("mouseover", function() {
                 d3.select(this).style("background-color", "firebrick");
             })
             .on("mouseout", function() {
                 d3.select(this).style("background-color", "steelblue");
             });
});
