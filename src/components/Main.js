// importing d3.js
import * as d3 from 'd3';

// importing parsing functions from utils
import {} from '../utils';

function Main(_) {

    let _accessor = 'status';

    function exports(data) {
        const root = _;

        // data transformation
        data.sort((a,b) => d3.ascending(a[_accessor], b[_accessor]));

        let billContainerUpdate = d3.select(root)
            .selectAll('.bill-container')
            .data(data);
        const billContainerEnter = billContainerUpdate.enter()
            .append('div')
            .attr('class', d => d.topic)
            .classed('bill-container', true)
            .classed('col-md-12', true);
        billContainerUpdate.exit().remove();
        const containerHeight = d3.select('.bill-container').node().clientHeight;
        billContainerUpdate = billContainerUpdate.merge(billContainerEnter)
            .attr('class', d => d.topic)
            .classed('bill-container', true)
            .classed('col-md-12', true)
            .style('position','absolute')
            .style('top', (d,i) => `${i*(containerHeight+2)}px`);

        let linkUpdate = billContainerUpdate.selectAll('a')
            .data(d => [d]);
        const linkEnter = linkUpdate.enter()
            .append('a')
            .attr('href', d => `./${d.slug}`);
        linkUpdate.exit().remove();
        linkUpdate = linkUpdate.merge(linkEnter)
            .attr('href', d => `./${d.slug}`);

        let imgNodeUpdate = linkUpdate.selectAll('.bill-img-node')
            .data(d => [d]);
        const imgNodeEnter = imgNodeUpdate.enter()
            .append('div')
            .classed('bill-img-node', true);
        imgNodeUpdate.exit().remove();
        imgNodeUpdate = imgNodeUpdate.merge(imgNodeEnter)
            .classed('bill-img-node', true);

        let imgContainerUpdate = imgNodeUpdate.selectAll('.bill-img-container')
            .data(d => [d]);
        const imgContainerEnter = imgContainerUpdate.enter()
            .append('div')
            .classed('bill-img-container', true);
        imgContainerUpdate.exit().remove();
        imgContainerUpdate = imgContainerUpdate.merge(imgContainerEnter)
            .classed('bill-img-container', true);

        let imgUpdate = imgContainerUpdate.selectAll('.bill-img')
            .data(d => [d]);
        const imgEnter = imgUpdate.enter()
            .append('img')
            .classed('bill-img', true)
            .attr('src', d => `./img/${d.slug}.png`);
        imgUpdate.exit().remove();
        imgUpdate = imgUpdate.merge(imgEnter)
            .classed('bill-img', true)
            .attr('src', d => `./img/${d.slug}.png`);

        let statusNodeUpdate = linkUpdate.selectAll('.status-node')
            .data(d => [d]);
        const statusNodeEnter = statusNodeUpdate.enter()
            .append('div')
            .attr('class', d => d.status)
            .classed('offset-md-2', true)
            .classed('status-node', true);
        statusNodeUpdate.exit().remove();
        statusNodeUpdate = statusNodeUpdate.merge(statusNodeEnter)
            .attr('class', d => d.status)
            .classed('offset-md-2', true)
            .classed('status-node', true);

        let billNodeUpdate = linkUpdate.selectAll('.bill-node')
            .data(d => [d]);
        const billNodeEnter = billNodeUpdate.enter()
            .append('div')
            .classed('bill-node', true)
            .classed('offset-md-4', true);
        billNodeUpdate.exit().remove();
        billNodeUpdate = billNodeUpdate.merge(billNodeEnter)
            .classed('bill-node', true)
            .classed('offset-md-4', true);

        let billNumberUpdate = billNodeUpdate.selectAll('.bill-number')
            .data(d => [d]);
        const billNumberEnter = billNumberUpdate.enter()
            .append('h3')
            .classed('bill-number', true)
            .text(d => d.bill_nb);
        billNumberUpdate.exit().remove();
        billNumberUpdate = billNumberUpdate.merge(billNumberEnter)
            .classed('bill-number', true)
            .text(d => d.bill_nb);

        let billTitleUpdate = billNodeUpdate.selectAll('.bill-title')
            .data(d => [d]);
        const billTitleEnter = billTitleUpdate.enter()
            .append('h2')
            .classed('bill-title', true)
            .text(d => d.bill);
        billTitleUpdate.exit().remove();
        billTitleUpdate = billTitleUpdate.merge(billTitleEnter)
            .classed('bill-title', true)
            .text(d => d.bill);

    }

    exports.orderBy = function(_) {
        // _ is a string
        if (typeof _ === "undefined") return _accessor;
		_accessor = _;
		return this;

    };

    return exports;
}

export default Main;
