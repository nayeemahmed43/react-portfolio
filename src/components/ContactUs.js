import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            
              <div className="widget">
                <h4>Contact Me</h4>
                <form name="contact" method="POST" data-netlify="true">
                  <div className="fields">
                    <div className="field half">
                      <input type="text" name="name" id="name" placeholder="Name"/>
                    </div>
                    <div className="field half">
                      <input type="email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                      <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
                    </div>
                    <div className="field">
                      <input type="file" name="myfile" id="myfile" placeholder="Upload File" rows="7" />
                    </div>
                    <div className="field">
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                  </div>
                  <ul class="actions">
                    <li>
                      <input type="submit" value="Send Message" class="button primary"/>
                    </li>
                  </ul>
                </form>
              </div>
            
          </div>
        </section>
        );
  }
}