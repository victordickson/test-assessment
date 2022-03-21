'use strict'

import fetch from "node-fetch";
import config from '../../config.js';

const functions = {
  getListFromAPI: async function () {
    const path = '/facts';
    let data = [];
  
    const res = await fetch(`${config.source.url}${path}`, {
      compress: true,
      timeout: 60e3, // 60s timeout as default
      follow: 0,
      headers: {
        'content-type': 'application/json'
      }
    }).catch(err => {
      console.log('Some error!');
      throw err
    })
    data = await res.json();
  
    // Return response from external API
    return { data };
  }
}

export default functions;

