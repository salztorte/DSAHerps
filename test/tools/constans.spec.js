import { expect }from 'chai';

import {keyMirror} from '../../src/config/constans';

describe('tests keyMirror', () => {
    it('should create a Json ou of Array', () =>{
        let result = keyMirror([1,2,3,4,5]);
        expect(result).be.eql({1:1,2:2,3:3,4:4,5:5});
    });
});