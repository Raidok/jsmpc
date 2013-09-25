
# How to set up environment

1. Make sure you have Node.js and npm installed
2. Enter the following commands:

    git clone git@github.com:Raidok/jsmpc.git
    cd jsmpc
    sudo npm -g install grunt-cli karma bower
    npm install
    bower install
    grunt watch


# Troubleshooting

If 'grunt watch' hangs, try this:

    Open "grunt-karma.js", located in: node_modules/grunt-karma/tasks/grunt-karma.js
    Change background: false -> true. This was on or around line 20.
    Change background: var data = this.data; -> var data = {};. This was on or around line 22.
    Execute grunt watch and it succeeds.

[Source](https://github.com/ngbp/ng-boilerplate/issues/37)
