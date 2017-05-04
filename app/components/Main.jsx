<<<<<<< HEAD
var React = require('react');
var Nav = require('Nav');



var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav/>
                    <p>Main.jsx rendered</p>
                    {props.children}
                </div>
            </div>
        </div> 
    )
};

=======
var React = require('react');
var Nav = require('Nav');



var Main = (props) => {
    return (
        <div>
          <Nav/>
            <div className="row">
                <div className="column small-centered medium-6 larger-4">
                    {props.children}
                </div>
            </div>
        </div> 
    )
};

>>>>>>> 7102544a61d94b6b21b22d9e9c5548cd0d0f48ed
module.exports = Main;