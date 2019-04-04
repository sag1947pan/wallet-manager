import { TestBed } from '@angular/core/testing';
import { WalletService } from './wallet.service';
describe('WalletService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(WalletService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=wallet.service.spec.js.map