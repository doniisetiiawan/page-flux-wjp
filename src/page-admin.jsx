import React, { Component } from 'react';
import PageStore from './page-store';
import PageDispatcher from './page-dispatcher';

class PageAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = PageStore.getState();
  }

  componentDidMount = () => {
    PageStore.on('change', this.onChange);
  }

  componentWillUnmount = () => {
    PageStore.removeListener('change', this.onChange);
  };

  onChange = () => {
    this.setState(PageStore.getState());
  };

  render() {
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();

            PageDispatcher.dispatch({
              action: 'ADD_PAGE',
            });
          }}
        >
          add page
        </a>
        <ol>
          {this.state.pages.map((page) => (
            <li key={page.id}>
              {page.title}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default PageAdmin;
