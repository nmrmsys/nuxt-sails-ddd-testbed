/**
 * FRM0010Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: async function (req, res) {
        return res.send('index');
    },

    index2: async function (req, res) {
        return res.send('index2');
    },

    testDDD: async function (req, res) {
        rtns = await sails.DDD.callProcedure('proc01');
        // return res.view('requestAction', rtns.toObject());
        // return res.send(rtns.toJSON());
        return res.send('callProc');
    },

    testVal: async function (req, res) {
        const validation = req.validator({prm1: 'required|integer'});
        if(validation.fails()){
            return res.send('testVal:fails');
        }
        return res.send('testVal:passes');
    },

};

