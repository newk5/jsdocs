'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'



class PrismHighlight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // empty state, we might add something in future
        };
    }



    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    static get defaultProps() {
        return {
            language: 'javascript',
            tab: '    ', // 4 spaces
            title: '',
            description: '',
            classes: {
                title: '',
                description: '',
                pre: '',
                code: '',
            },
        }
    }

    render() {

        return (
            <div className={'prismHighlight'}>
                <div className={'title'}>
                    {this.props.title}
                </div>
                { this.props.description &&
                    <div className={'descriptionPrism' }>{ this.props.description }</div>
                }
                <Highlight  {...defaultProps} theme={theme} code={this.props.children} language={this.props.language}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>

            </div>
        )
    }

}

export default PrismHighlight;
