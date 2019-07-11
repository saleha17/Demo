import { TestBed } from '@angular/core/testing';
import { loginService } from './login.services';
import { ChartsServiceStoreRpt1Requisition} from './charts.service.store.rpt1.requisition';
import { lotTrackingService } from './lot.tracking.service';

describe('loginService', () => 
{      
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => 
  {
    const service: loginService = TestBed.get(loginService);
    expect(service).toBeTruthy();
  });
});

describe('ChartsServiceStoreRpt1Requisition', () => 
{      
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => 
  {
    const service: ChartsServiceStoreRpt1Requisition = TestBed.get(ChartsServiceStoreRpt1Requisition);
    expect(service).toBeTruthy();
  });
});

describe('lotTrackingService', () => 
{      
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => 
  {
    const service: lotTrackingService = TestBed.get(lotTrackingService);
    expect(service).toBeTruthy();
  });
});
