// Generated by https://pagedraw.io/pages/9799
import React from 'react';
import './square.css';

function render() {
    return <div className="square">
        { (this.props.state === "flag") ?
            <div onClick={this.props.handleClick} className="square-flag-6">
                <div className="square-0-0-0">
                    <div className="square-outer_square-9">
                        <div className="square-0-0-0-0-0">
                            <img src="https://ucarecdn.com/6e024a61-f6bb-4b11-bca0-d4feeb464702/" className="square-image-6" /> 
                        </div>
                    </div>
                </div>
            </div>
        : null}
        { (this.props.state === "exposed") ?
            <div onClick={this.props.handleClick} className="square-exposed-7">
                <div className="square-1-0-0">
                    <div className="square-outer_square-4">
                        <div className="square-1-0-0-0-0">
                            <input type="text" placeholder="1" className="square-bombcount-8" /> 
                        </div>
                    </div>
                </div>
            </div>
        : null}
        { (this.props.state === "bomb") ?
            <div onClick={this.props.handleClick} className="square-bomb-8">
                <div className="square-2-0-0">
                    <div className="square-outer_square-99">
                        <div className="square-2-0-0-0-0">
                            <img src="https://ucarecdn.com/c1b0d932-12ca-40ce-9ecc-11f49220cd77/" className="square-image-0" /> 
                        </div>
                    </div>
                </div>
            </div>
        : null}
        { (this.props.state === "default") ?
            <div onClick={this.props.handleClick} className="square-default-9">
                <div className="square-3-0-0">
                    <div className="square-outer_square-3">
                        <div className="square-3-0-0-0-0">
                            <div className="square-inner_square-5" /> 
                        </div>
                    </div>
                </div>
            </div>
        : null}
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}