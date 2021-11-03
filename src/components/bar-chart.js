import { useD3 } from '../hooks/useD3';
import React, {useState} from 'react';
import * as d3 from 'd3';

function BarChart(props) {
const data = props.data;

  const ref = useD3(
    (svg) => {
     
const w = 1440;
const h = 500;
const padding = 60;
const xScale = d3.scaleBand()
         .domain(data.map((d) => d.pickup_date))
         .range([ padding+w*0.4, w - padding])
         .padding(0.5)

const yScale = d3.scaleLinear()
         .domain([0, d3.max(data, (d) => d.total_pickups)])
         .rangeRound([h - padding, padding]);

       
     
 svg = d3.select("body").append("div")
                       .append("svg")
                       .attr("width", w)
                       .attr("height", h);
     
         svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) =>xScale(d.pickup_date))
            .attr("y", (d, i) =>yScale(d.total_pickups))
            .attr("width", xScale.bandwidth())
            .attr("height", (d, i) =>h-yScale(d.total_pickups)-padding)
            .attr("fill", "navy")
            .attr("class", "bar")
            .attr("viewBox", [0, 0, w, h])
            .attr("preserveAspectRatio","xMidYMid meet")
            .attr("position", "fixed")
            
           .append("title")
           .text((d)=>d.total_pickups)

svg.selectAll("text")
.data(data)
.enter()
.append("text")
.text((d) =>  (d.total_pickups))
.attr("x", (d) => xScale(d.pickup_date))
.attr("y", (d) => yScale(d.total_pickups+3))

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);


svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.style("font-size",20)
.call(xAxis)

svg.append("g")
.attr("transform", "translate("+(w*0.4 +padding)+",0)")
.style("font-size",20)
.call(yAxis)

},[data.length]
  
  );
    
  return (
    <div>
    </div>
  );
}

export default BarChart;