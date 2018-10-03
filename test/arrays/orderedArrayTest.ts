import {OrderedArray} from '../../arrays/orderedArray';
import { expect } from 'chai';
import 'mocha';

describe('Ordered Array Class', () => {

    it('Add() should return true when a value is provided', () => {
        let ordArray = new OrderedArray();
        let result = ordArray.add(0);
        expect(result).to.equal(true);
    });

    it('AddValues() should return true when all values where added to the array', () => {
        let ordArray = new OrderedArray();
        let result = ordArray.addValues([0,1,2,3]);
        expect(result).to.equal(true);
        expect(ordArray.printAllValues()).to.equal('0123');
    });
    it('AddValues() should return false if no value is inserted', () => {
        let ordArray = new OrderedArray();
        let result = ordArray.addValues([]);
        expect(result).to.equal(false);
        expect(ordArray.printAllValues()).to.equal('');
    });

    it('PrintAllValues() should write to console all values within the array', () => {
        let ordArray = new OrderedArray();
        ordArray.add(0);
        ordArray.add(1);
        ordArray.add(2);
        let result = ordArray.printAllValues();
        expect(result).to.equal('012');
    });

    it('Should find the value in the position number 2', () => {
        let ordArray = new OrderedArray();
        ordArray.add(0);
        ordArray.add(1);
        ordArray.add(2);
        ordArray.add(3);
        ordArray.add(4);
        ordArray.add(5);
        ordArray.add(6);
        let resultPos = ordArray.find(2);
        expect(resultPos).to.equal(2);
    });

    it('Should not find the value and return -1. The value provided is greater than the last value of the array', () => {
        let ordArray = new OrderedArray();
        ordArray.add(0);
        ordArray.add(1);
        ordArray.add(2);
        ordArray.add(3);
        ordArray.add(4);
        ordArray.add(5);
        ordArray.add(6);
        let resultPos = ordArray.find(8);
        expect(resultPos).to.equal(-1);
    });
    it('Should not find the value and return -1. The value provided does not exist but should be located within the range of the array ', () => {
        let ordArray = new OrderedArray();
        ordArray.add(0);
        ordArray.add(1);
        ordArray.add(3);
        ordArray.add(4);
        ordArray.add(5);
        ordArray.add(6);
        let resultPos = ordArray.find(2);
        expect(resultPos).to.equal(-1);
        expect(ordArray.printAllValues())
    });
    it('Should return the position (4) for the insert', () => {
        let ordArray = new OrderedArray();
        ordArray.addValues([0,1,2,3]);

        expect(ordArray.findInsertPosition(7)).to.equal(4);
    });
    it('Should return the position (2) for the insert', () => {
        let ordArray = new OrderedArray();
        ordArray.addValues([0,75,93,101,708]);

        expect(ordArray.findInsertPosition(76)).to.equal(2);
    });
    it('Should return -1 since the value already exists', () => {
        let ordArray = new OrderedArray();
        ordArray.addValues([0,75,93,101,708]);

        expect(ordArray.findInsertPosition(101)).to.equal(-1);
    });

});