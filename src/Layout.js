import React from 'react';
import './Layout.css';


const Layout = () => {
  return (
      <div className="container">
        <div className="left-lane">
          <div className="card">
            <div className="content">
              <div className="header">Card 1</div>
              <div class="ui divider"></div>
              <div className="description">
                This is some text describing the first card.

              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">Card 2</div>
              <div class="ui divider"></div>
              <div className="description">
                This is some text describing the second card.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">Card 3</div>
              <div class="ui divider"></div>
              <div className="description">
                This is some text describing the third card.
              </div>
            </div>
          </div>
        </div>
        <div className="right-lane">
  <div class="modal">
    <div class="header">Search Now</div>
    <div class="ui divider"></div>
  </div>
</div>
        </div>
 
    
  );
};

export default Layout;
