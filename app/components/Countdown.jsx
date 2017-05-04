<<<<<<< HEAD
var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    render: function() {
        return(
            <div>
                <Clock totalSeconds={129} />
            </div>
        );
    }
});

=======
var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function(){
        return {count: 0};
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds
        })
    },
    render: function() {
        var {count} = this.state;
        return(
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        );
    }
});

>>>>>>> 7102544a61d94b6b21b22d9e9c5548cd0d0f48ed
module.exports = Countdown;