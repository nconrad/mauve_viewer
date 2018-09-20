import {schemeCategory20} from './colors';
import {marginTop, trackOffset, yPosOffset, lcbHeight} from './consts';


export class Track {

    constructor(params) {
        this.d3 = params.d3;
        this.svg = params.svg;

        this.hidden = params.hidden;
        this.id = params.id;
        this.name = params.name;
        this.label = params.label;
        this.width = params.width;
        this.xLength = params.xLength;
        this.regions = params.regions;
        this.yPos = params.yPos || marginTop + (this.id - 1) * trackOffset;

        // render and expose axis/scale
        this.x;
        this.xAxis;
        this.gX;
        this.track;
        this.render();

        return this;
    }

    render() {
        if (this.hidden) {
            this.hiddenTrack();
            return;
        }

        let d3 = this.d3;

        this.x = d3.scaleLinear()
            .domain([0, this.xLength])
            .range([1, this.width + 1]);

        this.xAxis = d3.axisBottom(this.x)
            .ticks(5)
            .tickSize(10)
            .tickFormat(d3.format("d"));

        let g = this.track = this.svg.append('g')
            .attr('class', d => `track id-${this.id}`)

        this.gX = g.append("g")
            .attr('class', `axis axis-x-${this.id}`)
            .call(this.xAxis)
            .attr('transform', `translate(0, ${this.yPos})`);

        // add names
        g.append('text')
            .attr('x', 0)
            .attr('y', this.yPos + trackOffset - 5) // -2 padding
            .text(this.label || this.name)
            .attr('font-family', "sans-serif")
            .attr('font-size', "10px")
            .attr('fill', '#888');

        if (this.regions)
            this.addRegions(this.regions);
    }

    addRegions(regions) {
        let numOfLCBs = regions.length;

        // add regions
        this.track.selectAll('rect')
            .data(regions)
            .enter()
            .append('rect')
            .attr('class', d => `region track-id-${this.id} group-${d.groupID} id-${d.id}`)
            .attr('x', d => this.x(d.start))
            .attr('y', d => this._getRegionYPos(this.id, d.strand))
            .attr('width', d => this.x(d.end - d.start))
            .attr('height', lcbHeight)
            .attr('stroke', '#fffff')
            .attr('fill', d =>  schemeCategory20[(d.groupID % numOfLCBs) % 20] )

        this.regions = regions;
    }

    hiddenTrack() {
        let g = this.track
            .append('g')
            .attr('class', d => `hidden-track`)

        g.append('rect')
            .attr('class', d => `hidden-track track-${this.id}`)
            .attr('x', 0)
            .attr('y', d => (this.id-1) * trackOffset )
            .attr('width', d => 10000)
            .attr('height', 20)
            .attr('stroke', '#fffff')
            .attr('fill', d =>  '#aaa')

        g.append('text')
            .attr('x', 10)
            .attr('y', this.yPos - 2) // -2 padding
            .text(this.label || this.name)
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("fill", '#222');
    }

    rescaleAxis() {
        if (this.hidden) return;
        this.gX.call(this.xAxis.scale(this.d3.event.transform.rescaleX(this.x)));
    }

    _getRegionYPos(trackIdx, strandDirection) {
        return this.yPos + (strandDirection === '-' ? yPosOffset + lcbHeight : yPosOffset);
    }
}
