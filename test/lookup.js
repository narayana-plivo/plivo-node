import assert from 'assert';
import sinon from 'sinon';
import {
    Client
} from '../lib/rest/client-test';
import {
    PlivoGenericResponse
} from '../lib/base.js';

let client = new Client('sampleid', 'sammpletoken', 'sampleproxy');

describe('LookupInterface', function() {
    it('should lookup number', function() {
        return client.lookup.get('+14154305555')
            .then(function(number) {
                assert.equal(number.format.e164, '+14154305555')
                assert.equal(number.phoneNumber, '+14154305555')
                assert.equal(number.resourceUri, '/v1/Number/+14154305555?type=carrier')
            })
    });
});
