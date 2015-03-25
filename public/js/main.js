function CalculatorModel(leukocytes, youngNeutrophils, stabNeutrophils,
                      segmentedNeutrophils, monocytes, lymphocytes, eosinophils, esr) {
    var self = this;

    self.leukocytes = ko.observable(leukocytes);
    self.youngNeutrophils = ko.observable(youngNeutrophils);
    self.stabNeutrophils = ko.observable(stabNeutrophils);
    self.segmentedNeutrophils = ko.observable(segmentedNeutrophils);
    self.monocytes = ko.observable(monocytes);
    self.lymphocytes = ko.observable(lymphocytes);
    self.eosinophils = ko.observable(eosinophils);
    self.esr = ko.observable(esr);
    self.lastInputWasValid = ko.observable(true);
    self.qwe = ko.observable(0);
    self.kLeukocytes = ko.observable(0);
    self.kEsr = ko.observable(0);

    var index = 0;

    self.validate = function(data, event) {
        var currentElement = event.target;
        if(isNaN(currentElement.value)) {
            index++;
            self.lastInputWasValid(false);
            event.target.parentNode.classList.add('has-error');
        } else {
            index--;
            self.lastInputWasValid(true);
            event.target.parentNode.classList.remove('has-error');
        }
        console.log(event.target.value);
    };

    self.validateAndChooseKLeukocytes = function(data, event) {
        var currentValue = event.target.value;
        var kLeukocytes = 0;
        if(isNaN(currentValue)){

        } else {
            if(currentValue >= 1 && currentValue <= 2) {
                kLeukocytes = 0.2;
            } else if(currentValue >= 2.1 && currentValue <= 3) {
                kLeukocytes = 0.4;
            } else if(currentValue >= 3.1 && currentValue <= 4) {
                kLeukocytes = 0.6;
            } else if(currentValue >= 4.1 && currentValue <= 5) {
                kLeukocytes = 0.8;
            } else if(currentValue >= 5.1 && currentValue <= 8) {
                kLeukocytes = 1;
            } else if(currentValue >= 8.1 && currentValue <= 9) {
                kLeukocytes = 1.1;
            } else if(currentValue >= 9.1 && currentValue <= 10) {
                kLeukocytes = 1.2;
            } else if(currentValue >= 10.1 && currentValue <= 11) {
                kLeukocytes = 1.3;
            } else if(currentValue >= 11.1 && currentValue <= 12) {
                kLeukocytes = 1.4;
            } else if(currentValue >= 12.1 && currentValue <= 13) {
                kLeukocytes = 1.5;
            } else if(currentValue >= 13.1 && currentValue <= 14) {
                kLeukocytes = 1.6;
            } else if(currentValue >= 14.1 && currentValue <= 15) {
                kLeukocytes = 1.7;
            } else if(currentValue >= 15.1 && currentValue <= 16) {
                kLeukocytes = 1.8;
            } else if(currentValue >= 16.1 && currentValue <= 17) {
                kLeukocytes = 1.9;
            } else if(currentValue >= 17.1 && currentValue <= 18) {
                kLeukocytes = 2;
            } else if(currentValue >= 18.1 && currentValue <= 19) {
                kLeukocytes = 2.1;
            } else if(currentValue >= 19.1 && currentValue <= 20) {
                kLeukocytes = 2.2;
            } else if(currentValue >= 20.1 && currentValue <= 21) {
                kLeukocytes = 2.4;
            } else if(currentValue >= 21.1 && currentValue <= 22) {
                kLeukocytes = 2.6;
            } else if(currentValue >= 22.1 && currentValue <= 23) {
                kLeukocytes = 2.8;
            } else if(currentValue >= 23.1 && currentValue <= 24) {
                kLeukocytes = 3;
            } else if(currentValue >= 24.1 && currentValue <= 25) {
                kLeukocytes = 3.2;
            } else if(currentValue >= 25.1 && currentValue <= 26) {
                kLeukocytes = 3.4;
            } else if(currentValue >= 26.1 && currentValue <= 27) {
                kLeukocytes = 3.6;
            } else if(currentValue >= 27.1 && currentValue <= 28) {
                kLeukocytes = 3.8;
            } else if(currentValue >= 28.1 && currentValue <= 29) {
                kLeukocytes = 4;
            }
        }
        self.kLeukocytes(kLeukocytes);
    };

    self.validateAndChooseKEsr = function(data, event) {
        var currentValue = event.target.value;
        var kEsr = 0;
        if(isNaN(currentValue)){

        } else {
            if(currentValue < 5) {
                kEsr = 0.9;
            } else if(currentValue >= 6 && currentValue <= 15) {
                kEsr = 1.0;
            } else if(currentValue >= 16 && currentValue <= 20) {
                kEsr = 1.1;
            } else if(currentValue >= 21 && currentValue <= 25) {
                kEsr = 1.2;
            } else if(currentValue >= 26 && currentValue <= 30) {
                kEsr = 1.3;
            } else if(currentValue >= 31 && currentValue <= 35) {
                kEsr = 1.5;
            } else if(currentValue >= 36 && currentValue <= 40) {
                kEsr = 1.7;
            } else if(currentValue >= 41 && currentValue <= 45) {
                kEsr = 1.9;
            } else if(currentValue >= 46 && currentValue <= 50) {
                kEsr = 2.1;
            } else if(currentValue >= 51 && currentValue <= 55) {
                kEsr = 2.3;
            } else if(currentValue >= 56 && currentValue <= 60) {
                kEsr = 2.5;
            } else if(currentValue > 61) {
                kEsr = 2.7;
            }
        }
        self.kEsr(kEsr);
    };
}

ko.applyBindings(new CalculatorModel(0,0,0,0,0,0,0,0));