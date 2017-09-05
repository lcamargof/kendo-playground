import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

interface Agent {
  name: string;
  service: string;
}

interface HealthStatusNode {
  name: string;
  status: string;
  children?: HealthStatusNode[];
  agents?: Agent[];
  services?: ExternalSource[];
}

interface ExternalSource {
  name: string;
  hostName: string;
  status: string;
}

@Component({
  selector: 'app-health-status',
  styleUrls: ['./health-status.component.css'],
  templateUrl: './health-status.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HealthStatusComponent implements OnChanges {
  @ViewChild('healthStatusDiagram') private svg: ElementRef;
  @Input() data: HealthStatusNode;
  private init = false;
  settings = {
    nodeSize: <[number, number]> [120, 180],
    margin: { top: 30, right: 120, bottom: 20, left: 10 },
    width: 1000,
    height: 1000,
    rectHeight: 100,
    rectWidth: 100
  };

  ngOnChanges() {
    if (this.data && !this.init) {
      this.createDiagram();
     }
  }

  createDiagram(): void {
    this.init = true;

    // Create the d3 tree
    const tree = d3.tree().nodeSize(this.settings.nodeSize);

    // Root node definition
    const root = d3.hierarchy(this.data);

    const height = (root.height + 1) * 150;

    // Get the SVG group container
    const treeGroup = d3.select(this.svg.nativeElement)
      .attr('width', '100%')
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(500, ${this.settings.margin.top})`);

    // Path definition between nodes
    const link = treeGroup.selectAll('.link')
      .data(tree(root).links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d => `M ${d.source.x} , ${d.source.y} L ${d.target.x} ${d.target.y}`)
      .attr('stroke', (d: any) => {
        if (d.source.data.status === 'online' && d.target.data.status === 'online') {
          return 'green';
        } else {
          return 'red';
        }
      });

    // Nodes of the tree
    const node = treeGroup.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', (d: any) => (d.data.status === 'online') ? 'online' : 'offline')
      .attr('transform', (d: any) => `translate(${d.x - this.settings.rectWidth / 2}, ${d.y - this.settings.rectHeight / 2})`);

    // Hack white container
    node.append('rect')
      .attr('width', this.settings.width)
      .attr('height', this.settings.rectHeight)
      .attr('fill', 'white');

    // TODO: Change this for corresponding server icon
    node.append('circle')
      .attr('cx', this.settings.rectWidth / 2)
      .attr('cy', this.settings.rectHeight / 2)
      .attr('r', 10)
      // BIND NODE EVENTS!!!
      .on('click', this.onNodeClick)
      .on('mouseover', this.onNodeMouseOver)
      .on('mouseout', this.onNodeMouseOut);

    // Labels
    node.append('text')
      .attr('x', this.settings.rectWidth / 2)
      .attr('y', 80) // TODO: This could change when switch from circle to icon
      .style('text-anchor', 'middle')
      .text((d: any) => d.data.name);

    // Services
    const servicesWidth = (this.data.services.length * 100) + 30;

    treeGroup.append('rect')
      .attr('height', 100)
      .attr('width', servicesWidth)
      .attr('x', 180)
      .attr('y', -30)
      .attr('fill', 'white')
      .attr('stroke', '#ccc');

    const services = treeGroup.selectAll('.services')
      .data(this.data.services)
      .enter().append('g');

    const findDistance = (d, i) => 250 + (100 * i);

    // TODO: Change this for the corresponding service icon
    services.append('circle')
      .attr('cx', findDistance)
      .attr('cy', 0)
      .attr('r', 10)
      .attr('fill', (d: ExternalSource) => (d.status === 'online') ? 'green' : 'red');

    services.append('text')
      .attr('x', findDistance)
      .attr('y', 30)
      .style('text-anchor', 'middle')
      .text((d: ExternalSource) => d.name);

    services.append('text')
      .attr('x', findDistance)
      .attr('y', 50)
      .style('text-anchor', 'middle')
      .text((d: ExternalSource) => '* ' + d.hostName);

    services.append('path')
      .attr('class', 'link')
      .attr('d', d => `M 50 , 0 L 150 0`)
      .attr('stroke', 'green');
  }

  onNodeClick(d: any): void {
    console.log('Show details', d);
  }

  onNodeMouseOver(d: any): void {
    console.log('Mouse over', d);
  }

  onNodeMouseOut(d: any): void {
    console.log('Mouse out', d);
  }

  // TODO: Implement if needed for the labels
  // tslint:disable
  wrapText(text, width) {
    text.each(function() {
      let text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan: any = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");

      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));

        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }
}
