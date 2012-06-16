var NodeDebugRunner = require("./node_debug-runner");

module.exports = function setup(options, imports, register) {
    var pm = imports["process-manager"];
    var sandbox = imports.sandbox;
    var vfs = imports.vfs;
    var runNode = imports["run-node"];

    NodeDebugRunner.call(this, options.url, vfs, pm, sandbox, runNode, false, function (err) {
        if (err) return register(err);

        register(null, {
            "run-node-debug": { }
        });
    });
};