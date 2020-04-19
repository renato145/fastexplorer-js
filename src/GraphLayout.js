import React, { useRef, useEffect, useMemo } from 'react';
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  select,
  drag,
  event,
  scaleLinear,
  extent,
  forceCollide,
  selectAll,
  schemeCategory10,
  forceX,
  forceY,
} from 'd3';
import './GraphLayout.css';

const clamp = (value, min, max) =>
  value >= max ? max : value <= min ? min : value;

const getSize = (selection) => {
  const node = selection.node();
  return { width: node.clientWidth, height: node.clientHeight };
};

const enterLink = (selection) => {
  selection.attr(
    'class',
    (d) => `link node-${d.source.index} node-${d.target.index}`
  );
};

const enterNode = (selection, r, simulation, clipPositions) => {
  selection.append('circle').attr('r', r);
  // .attr('fill', (d) => schemeCategory10[d.k]);

  selection
    .attr('class', 'node')
    .append('text')
    .text((d) => d.name)
    .attr('y', 35);
  //     .call(
  //       drag()
  //         .on('start', (d) => dragStart(d, simulation))
  //         .on('drag', (d) => dragOn(d, clipPositions))
  //         .on('end', (d) => dragEnd(d, simulation))
  //     )
  //     .on('mouseenter', handleTooltipMouseEnter)
  //     .on('mouseout', handleTooltipMouseOut);
};

const getSvgRect = () =>
  select('.svg-container svg').node().getBoundingClientRect();

function handleTooltipMouseEnter(d) {
  const { top, left } = getSvgRect();

  select('.node-tooltip')
    .attr('index', d.index)
    .style('left', `${d.x + left}px`)
    .style('top', `${d.y + top}px`)
    .style('opacity', 1)
    .select('text')
    .text(d.name);

  selectAll(`.node-${d.index}`).classed('active', true);
}

function handleTooltipMouseOut(d) {
  select('.node-tooltip').style('opacity', 0);
  selectAll(`.node-${d.index}`).classed('active', false);
}

const dragStart = (d, simulation) => {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
};

const dragOn = (d, clipPositions) => {
  const [x, y] = clipPositions(event.x, event.y);
  d.fx = x;
  d.fy = y;
};

const dragEnd = (d, simulation) => {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
};

const updateLinks = (selection) => {
  selection
    .attr('x1', (d) => d.source.x)
    .attr('y1', (d) => d.source.y)
    .attr('x2', (d) => d.target.x)
    .attr('y2', (d) => d.target.y);
};

const updateNodes = (selection) => {
  selection.attr('transform', (d) => `translate(${d.x}, ${d.y})`);
  //   const tooltip = select('.node-tooltip');
  //   if (tooltip.node()) {
  //     const index = +tooltip.attr('index');
  //     const { top, left } = getSvgRect();
  //     const { x, y } = selection.data().filter((d) => d.index === index)[0];
  //     tooltip.style('left', `${x + left}px`).style('top', `${y + top}px`);
  //   }
};

const updateGraph = (selection) => {
  selection.selectAll('.link').call(updateLinks);
  selection.selectAll('.node').call(updateNodes);
};

export const GraphLayout = ({ nodes, links }) => {
  const ref = useRef();

  const simulation = useMemo(() => {
    return (
      forceSimulation()
        .force('links', forceLink().distance(100))
        .force('charge', forceManyBody().strength(-50))
        .force('collide', forceCollide())
        .force('center', forceCenter())
        //   .force('x', forceX());
        .force('y', forceY())
    );
  }, []);

  useEffect(() => {
    select('.svg-container')
      .append('div')
      .attr('class', 'node-tooltip')
      .style('opacity', 0)
      .append('text');
  }, []);

  useEffect(() => {
    const setCenter = () => {
      const svg = select(ref.current);
      const { width, height} = getSize(svg);
      simulation
        .force('center')
        .x(width / 2)
        .y(height / 2);
      simulation.alpha(0.5).restart();
    };

    simulation.on('tick', () => select(ref.current).call(updateGraph));
    window.addEventListener('resize', () => setCenter());
    setCenter();
    console.log('graph: update center');
  }, [simulation]);

  useEffect(() => {
    const svg = select(ref.current);
    const r = 15;
    // const degreeExtent = extent(nodes.map((d) => d.degree));
    // const scaleDegreeRadius = scaleLinear().domain(degreeExtent).range([5, 20]);

    simulation.nodes(nodes);
    simulation.force('links').links(links);
    simulation.force('collide').radius(r);

    // Links
    svg
      .selectAll('.link')
      .data(links, (d) => d.index)
      .join((enter) => enter.append('line').call(enterLink))
      .call(updateLinks);

    // Nodes
    const clipPositions = (x, y) => [
      clamp(x, 0, +svg.attr('width')),
      clamp(y, 0, +svg.attr('height')),
    ];

    svg
      .selectAll('.node')
      .data(nodes, (d) => d.index)
      .join((enter) =>
        enter.append('g').call(enterNode, r, simulation, clipPositions)
      )
      .call(updateNodes);

    simulation.alpha(0.5).restart();
    console.log('update data');
  }, [simulation, nodes, links]);

  return (
    <div className="svg-container">
      <svg ref={ref} />
    </div>
  );
};
