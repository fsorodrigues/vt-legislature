// importing d3.js
import * as d3 from 'd3';

// importing modules
import Main from './Main';

// setting up module instances

function Sort(_) {

    // creating default setting
    let _buttonsData = ['status', 'topic'];

    // creating dispatcher
    const _dispatch = d3.dispatch('btn:sort');

    function exports(data) {

        const root = this;

        const text = d3.select(root)
            .append('p')
            .classed('sort', true)
            .text('Sort by:');

        let buttonsUpdate = d3.select(root)
            .selectAll('.sort-button')
            .data(_buttonsData);
        const buttonsEnter = buttonsUpdate.enter()
            .append('button');
        buttonsUpdate.exit().remove();
        buttonsUpdate = buttonsUpdate.merge(buttonsEnter)
            .classed('sort-button', true)
            .attr('value', d => d)
            .text(d => d)
            .on('click', function(d) { _dispatch.call('btn:sort', this, d, data); });

    }

    // creating getter-setter pattern
    exports.buttons = function(_) {
        // _ is an array of strings
        if (typeof _ === "undefined") return _buttonsData
		_buttonsData = _;
        return this;
    };

    exports.on = function(eventType, cb) {
        // eventType is a string
        // cb is a function
        _dispatch.on(eventType, cb);
		return this;
    };

    return exports
}

export default Sort;
