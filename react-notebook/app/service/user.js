"use strict"

const Service = require('egg').Service;

class UserService extends Service {
    async user() {
        return {
            title: 'wdf',
            content: 'ABAAB'
        }
 
    }
}

module.exports = UserService

