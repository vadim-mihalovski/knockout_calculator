function CalculatorModel(leukocytes, youngNeutrophils, stabNeutrophils,
                      segmentedNeutrophils, monocytes, lymphocytes, eosinophils, esr) {
    var self = this;

    self.leukocytes = ko.observable();
    self.youngNeutrophils = ko.observable();
    self.stabNeutrophils = ko.observable();
    self.segmentedNeutrophils = ko.observable();
    self.monocytes = ko.observable();
    self.lymphocytes = ko.observable();
    self.eosinophils = ko.observable();
    self.esr = ko.observable();
    self.lastInputWasValid = ko.observable(true);
    self.qwe = ko.observable(0);
    self.kLeukocytes = ko.observable(0);
    self.kEsr = ko.observable(0);
    self.lii  = ko.observable(0);
    self.gpi = ko.observable(0);

    var index = 0;

    self.validate = function(data, event) {
        findErrorInput();
        var currentElement = event.target;
        if(isNaN(currentElement.value)) {
            index++;
            self.lastInputWasValid(false);
            event.target.parentNode.classList.add('has-error');
        } else {
            index--;
            self.lastInputWasValid(true);
            event.target.parentNode.classList.remove('has-error');
            calculateLii();
            calculateGpi();
            if(findErrorInput()){
                self.lastInputWasValid(false);
            }
        }
    };

    self.validateAndChooseKLeukocytes = function(data, event) {
        findErrorInput();
        var currentValue = event.target.value;
        var kLeukocytes = 0;
        if(isNaN(currentValue)){
            self.lastInputWasValid(false);
            event.target.parentNode.classList.add('has-error');
        } else {
            self.lastInputWasValid(true);
            event.target.parentNode.classList.remove('has-error');
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
            } else {
                self.lastInputWasValid(false);
                event.target.parentNode.classList.add('has-error');
            }
        }
        self.kLeukocytes(kLeukocytes);
        calculateLii();
        calculateGpi();
        if(findErrorInput()){
            self.lastInputWasValid(false);
        }
    };

    self.validateAndChooseKEsr = function(data, event) {
        findErrorInput();
        var currentValue = event.target.value;
        var kEsr = 0;
        if(isNaN(currentValue)){
            self.lastInputWasValid(false);
            event.target.parentNode.classList.add('has-error');
        } else {
            self.lastInputWasValid(true);
            event.target.parentNode.classList.remove('has-error');
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
            } else {
                self.lastInputWasValid(false);
                event.target.parentNode.classList.add('has-error');
            }
        }
        self.kEsr(kEsr);
        calculateLii();
        calculateGpi();
        if(findErrorInput()){
            self.lastInputWasValid(false);
        }
    };

    var calculateLii = function() {
        var result = (3*self.youngNeutrophils() + 2*self.stabNeutrophils()
            + +self.segmentedNeutrophils())/((+self.monocytes() + +self.lymphocytes())
            *(+self.eosinophils() + 1));
        if(!isNaN(result) && result !== Infinity) {
            self.lii(result);
        }
    };

    var calculateGpi = function() {
        var result = self.lii() * self.kEsr() * self.kLeukocytes();
        if(!isNaN(result) && result !== Infinity){
            self.gpi(result);
        }
    };

    var findErrorInput = function() {
        var list = document.getElementsByClassName('form-group');
        var result = false;
        for (var i = 0; i < list.length; i++) {
            if(list[i].classList.contains('has-error')) {
                result = true;
            }
        }
        return result;
    };
}

ko.applyBindings(new CalculatorModel(0,0,0,0,0,0,0,0));