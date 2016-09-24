'use strict';

var config = require('../../config/config');
var adminService = require('./adminService');
var handler = require('../../lib/common/requestHandler');
var adminModule = require('../../modules/admin/adminModule');
var getClientIP = require('../../lib/common/getClientIP');
var express = require('express');
var adminRoutes = express.Router();

/**
 * Admin API
 * @class admin
 **/

function getAdmin(req, res) {
    var adminId = req.query['adminId'];
    adminService.getAdmin(adminId, handler.request(req, res, 'getAdmin'));
}

function getAdminList(req, res) {
    adminService.getAdminList(handler.request(req, res, 'getAdminList'));
}

function addAdmin(req,res){
    var admin = adminModule.getSingleAdminDB(req);
    admin.CurrentHost = getClientIP(req);
    adminService.addAdmin(admin,handler.request(req,res,'addAdmin'));
}

function attachRoutes(app) {

    adminRoutes.get('/admin/getAdmin', getAdmin);
    adminRoutes.get('/admin/getAdminList',getAdminList)
    adminRoutes.post('/admin/addAdmin',addAdmin);
    app.use('/' + config.version.major, adminRoutes);
}

module.exports = attachRoutes;