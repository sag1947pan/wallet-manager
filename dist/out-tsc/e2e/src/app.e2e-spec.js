var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
describe('workspace-project App', function () {
    var page;
    beforeEach(function () {
        page = new AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Sample!');
    });
    afterEach(function () __awaiter(this, void 0, void 0, function* () {
        // Assert that there are no errors emitted from the browser
        var logs = yield browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        }));
    }));
});
//# sourceMappingURL=app.e2e-spec.js.map