// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel(leukocytes, youngNeutrophils, stabNeutrophils,
                      segmentedNeutrophils, monocytes, lymphocytes, eosinophils, esr) {
    this.leukocytes = ko.observable(leukocytes);
    this.youngNeutrophils = ko.observable(youngNeutrophils);
    this.stabNeutrophils = ko.observable(stabNeutrophils);
    this.segmentedNeutrophils = ko.observable(segmentedNeutrophils);
    this.monocytes = ko.observable(monocytes);
    this.lymphocytes = ko.observable(lymphocytes);
    this.eosinophils = ko.observable(eosinophils);
    this.esr = ko.observable(esr);
    this.lastInputWasValid = ko.observable(true);

    this.leukocytes = ko.pureComputed({
        read: this.leukocytes,
        write: function (value) {
            if (isNaN(value)) {
                this.lastInputWasValid(false);
            }
            else {
                this.lastInputWasValid(true);
            }
        },
        owner: this
    });

    this.youngNeutrophils = ko.pureComputed({
        read: this.youngNeutrophils,
        write: function (value) {
            if (isNaN(value)) {
                this.lastInputWasValid(false);
            }
            else {
                this.lastInputWasValid(true);
            }
        },
        owner: this
    });
}

// Activates knockout.js
ko.applyBindings(new AppViewModel(0,0,0,0,0,0,0,0));