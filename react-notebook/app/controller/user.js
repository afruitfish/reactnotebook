'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const Controller = require('egg').Controller

class userController extends Controller {
    async index() {
        const { ctx } = this;
        const { username } = ctx.query;
        ctx.body = 'user API' + username;
    }
    async getid() {
        const { ctx } = this;
        const { id } = ctx.params;
        ctx.body = 'user id:' + id;
    }
    async add() {
        const { ctx } = this;
        const { title, content } = await ctx.service.user.user();
        ctx.body = {
            title,
            content
        }
    }
}

module.exports = userController