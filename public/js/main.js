// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel(first, last) {
    this.lastName = ko.observable(last);
    this.lastInputWasValid = ko.observable(true);

    this.firstName = ko.pureComputed({
        read: this.firstName,
        write: function (value) {
            if (isNaN(value)) {
                this.lastInputWasValid(false);
                alert('a');
            }
            else {
                this.lastInputWasValid(true);
                alert('b');
            }
        },
        owner: this
    });
}

// Activates knockout.js
ko.applyBindings(new AppViewModel(0,0));