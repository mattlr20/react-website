import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Instafeed from 'react-instafeed';
import './Home.css';

export default class Home extends Component {
  render() {
    const instafeedTarget = 'instafeed';  
    return (
      <div id={instafeedTarget} className="container gal-container">
      <Instafeed
        get='tagged'
        tagName='weddings'        
        limit='12'
        ref='instafeed'
        target={instafeedTarget}
        resolution='standard_resolution'
        sortBy='most-recent'
        template='<div class="col-md-4 col-sm-6 co-xs-12 gal-item">
        <div class="box">
          <a href="#" data-toggle="modal" data-target="#{{id}}">
            <img src="{{image}}">
          </a>
          <div class="modal fade" id="{{id}}" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <div class="modal-body">
                  <img src="{{image}}">
                </div>
                  <div class="col-md-12 description">
                    <h4>{{model.short_caption}}</h4>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>'
        userId='464163593'
        clientId='clientIdInstagramApiString'
        accessToken='464163593.1677ed0.7784e7dc06244fd2a01f05c32f997705'
      />
      </div>
    )
  }
}