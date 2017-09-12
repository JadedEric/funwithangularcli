import { AlertComponent } from './alert.component';

import { AlertService } from '../_services/alert.service';


describe('AlertComponent', () => {
    it('should create an instance', () => {
        let component = new AlertComponent(null);
        expect(component).toBeTruthy();
    });

    it('should have called ngOnInit', () => {
        // ngOnInit will be triggered asynchronously, and makes spying difficult.
        // the best approach here is to create a trigger mock to callThrough to the onInit method of the component
        // and then determine if the ngOnInit has been called.

        // note: not getting to this
    });
});
