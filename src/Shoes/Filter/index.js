import React from 'react';
import './Filter.css';

export default () => (
  <div className="row">
    <div className="col-lg-12">
      <section className="filter">
        <img src={require('./filter.png')} alt="filter" className="filter-icon" />
        <div className="filter-gender">
          <button type="button" className="filter-btn selected">MAN</button>
          <button type="button" className="filter-btn">WOMAN</button>
        </div>
        <div className="filter-size">
          <span className="filter-size-title"></span>
          <span>
            <button type="button" className="filter-btn">36</button>
            <button type="button" className="filter-btn">37</button>
            <button type="button" className="filter-btn">38</button>
            <button type="button" className="filter-btn">39</button>
            <button type="button" className="filter-btn">40</button>
            <button type="button" className="filter-btn selected">41</button>
            <button type="button" className="filter-btn">42</button>
          </span>
        </div>
      </section>
    </div>
  </div>
);